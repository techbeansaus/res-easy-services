const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const tableSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  number: {
    type: Number,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  restaurantId: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: false
  },
  reservedFor:{
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Table', tableSchema);
