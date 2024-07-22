require('dotenv').config(); // load environment variables
// load node modeules required
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// load schema/data models
const Tenant = require('../../models/Tenant');
const Restaurant = require('../../models/Restaurant');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection string
const dbUri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}${process.env.DB_PARAMS}`;
console.log(dbUri);
console.log(`${process.env.DB_NAME}`);
// Connect to MongoDB
mongoose.connect(dbUri)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Create Tenant endpoint
app.post('/api/tenants', async (req, res) => {
    const { name, domain_name, subscription_status, subscription_tier } = req.body;

    try {
        const newTenant = new Tenant({
            name,
            domain_name,
            subscription_status,
            subscription_tier,
        });

        await newTenant.save();
        res.status(201).json(newTenant);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Tenant endpoint
app.put('/api/tenants/:id', async (req, res) => {
  const { id } = req.params;
  const { subscription_status, subscription_tier } = req.body;

  try {
      const tenant = await Tenant.findOneAndUpdate(
          { id: id },
          { subscription_status, subscription_tier },
          { new: true } // Return the updated document
      );

      if (!tenant) {
          return res.status(404).json({ error: 'Tenant not found' });
      }

      res.status(200).json(tenant);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

// Get all tenants endpoint
app.get('/api/tenants', async (req, res) => {
    try {
        const tenants = await Tenant.find();
        res.status(200).json(tenants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create restauant endpoint
app.post('/api/restaurants', async (req, res) => {
  const {
      name, address, aggregateRating, priceRange, telephone,
      servesCuisine, url, image, geo, openingHours
  } = req.body;

  try {
      const newRestaurant = new Restaurant({
          name,
          address,
          aggregateRating,
          priceRange,
          telephone,
          servesCuisine,
          url,
          image,
          geo,
          openingHours
      });

      await newRestaurant.save();
      res.status(201).json(newRestaurant);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

// Update Restaurant endpoint
app.put('/api/restaurants/:id', async (req, res) => {
  const { id } = req.params;
  const {
      name, address, aggregateRating, priceRange, telephone,
      servesCuisine, url, image, geo, openingHours
  } = req.body;

  try {
      const updatedRestaurant = await Restaurant.findOneAndUpdate(
          { id: id },
          {
              name,
              address,
              aggregateRating,
              priceRange,
              telephone,
              servesCuisine,
              url,
              image,
              geo,
              openingHours
          },
          { new: true } // Return the updated document
      );

      if (!updatedRestaurant) {
          return res.status(404).json({ error: 'Restaurant not found' });
      }

      res.status(200).json(updatedRestaurant);
  } catch (err) {
      res.status(400).json({ error: err.message });
  }
});

// Get all restaurants endpoint
app.get('/api/restaurants', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
