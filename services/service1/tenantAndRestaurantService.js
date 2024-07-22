// load environment variables
// require('dotenv').config(); 
const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
// load node modeules required
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const setupSwagger = require('../../commons/swagger');
// load schema/data models
const Tenant = require('../../models/Tenant');
const Restaurant = require('../../models/Restaurant');

// Create express app
const app = express();

// Setup Swagger
setupSwagger(app);

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


/**
 * @swagger
 * components:
 *   schemas:
 *     Tenant:
 *       type: object
 *       required:
 *         - name
 *         - domain_name
 *         - subscription_status
 *         - subscription_tier
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the tenant
 *         name:
 *           type: string
 *           description: The name of the tenant
 *         domain_name:
 *           type: string
 *           description: The domain name of the tenant
 *         subscription_status:
 *           type: string
 *           description: The subscription status of the tenant
 *         subscription_tier:
 *           type: string
 *           description: The subscription tier of the tenant
 *       example:
 *         id: d5fE_asz
 *         name: Tenant Name
 *         domain_name: tenant.example.com
 *         subscription_status: active
 *         subscription_tier: premium
 */

/**
 * @swagger
 * /api/tenants:
 *   post:
 *     summary: Create a new tenant
 *     tags: [Tenant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tenant'
 *     responses:
 *       201:
 *         description: The tenant was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant'
 *       400:
 *         description: Bad request
 */

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


/**
 * @swagger
 * /api/tenants/{id}:
 *   put:
 *     summary: Update the tenant's subscription status and tier
 *     tags: [Tenant]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tenant ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subscription_status:
 *                 type: string
 *               subscription_tier:
 *                 type: string
 *     responses:
 *       200:
 *         description: The tenant was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tenant'
 *       404:
 *         description: Tenant not found
 *       400:
 *         description: Bad request
 */

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
