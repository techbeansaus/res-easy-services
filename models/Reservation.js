const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const reservationSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuidv4,
    unique: true
  },
  tableId: {
    type: String,
    required: false
  },
  customerName: {
    type: String,
    required: true
  },
  customerContact: {
    type: String,
    required: true
  },
  bookingTime: {
    type: Date,
    required: false
  },
  startTime:{
    type: Date,
    required: false
  },
  endTime:{
    type: Date,
    required: false
  },
  modifiedTime: {
    type: Date,
    required: false
  },
  partySize: {
    type: Number,
    required: true
  },
  reservationStatus: {
    type: String,
    required: false
  },
  customerId:{
    type: String,
    required: false
  },
  underName:{
    person:{
      name:{
        type: String,
        required: true
      },
      telephone:{
        type: String,
        required: false
      },
      email:{
        type: String,
        required: false
      },
      birthDate:{
        type: Date,
        required: false
      }
    }
  }  
});

module.exports = mongoose.model('Reservation', reservationSchema);
