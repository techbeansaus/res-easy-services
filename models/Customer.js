const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const customerSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  givenName: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  telephone: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  address: {
    streetAddress: String,
    addressLocality: String,
    addressRegion: String,
    postalCode: String,
    addressCountry: String
  },
  dndStatus:{
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Customer', customerSchema);
