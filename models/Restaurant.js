const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the restaurant schema according to schema.org
const restaurantSchema = new mongoose.Schema({
    id: { type: String, default: uuidv4, unique: true },
    name: { type: String, required: true },
    address: {
        streetAddress: { type: String },
        addressLocality: { type: String },
        addressRegion: { type: String },
        postalCode: { type: String },
        addressCountry: { type: String }
    },
    aggregateRating: {
        ratingValue: { type: Number, min: 0, max: 5 },
        reviewCount: { type: Number }
    },
    priceRange: { type: String },
    telephone: { type: String },
    servesCuisine: { type: String },
    url: { type: String },
    image: { type: String },
    geo: {
        latitude: { type: Number },
        longitude: { type: Number }
    },
    openingHours: { type: String }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create the restaurant model
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
