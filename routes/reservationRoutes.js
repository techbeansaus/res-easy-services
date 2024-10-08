const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const Customer = require('../models/Customer');
const Restaurant = require('../models/Restaurant');
const { v4: uuidv4 } = require('uuid');

const DEFAULT_STATUS = process.env.DEFAULT_STATUS || 'ACCEPTED';

router.post('/', async (req, res) => {
    console.log(req.body);

    const {firstName, lastName, emailAddress, phoneNumber, bookingDate, timeSlot, numberOfGuests, specialRequest, reservationFor} = req.body;
    try {
        let customer = await Customer.findOne({ telephone: phoneNumber });
        
        if (!customer) {
            console.log("Creating new customer");
            customer = new Customer({
                givenName: firstName + ' ' + lastName,
                telephone: phoneNumber,
                email: emailAddress||'',
            });
            await customer.save();
        }

        
        console.log("Customer details are: ");
        console.log(customer);
        const newReservation = new Reservation({
            customerName: firstName + ' ' + lastName,
            customerEmail: emailAddress,
            customerPhone: phoneNumber,
            bookingTime: new Date(),
            id: uuidv4(),
            reservationStatus: `${DEFAULT_STATUS}`,
            customerId: customer.id,
            partySize: numberOfGuests,
            startTime: new Date(bookingDate + ' ' + timeSlot),
            specialRequest: specialRequest,
            reservationFor: reservationFor
        });

        console.log(newReservation);
        await newReservation.save();
        res.status(200).json(newReservation);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ error: err.message });
    }
});

router.get('/date', async (req, res) => {
    const { date } = req.query;

    try {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);

        const reservations = await Reservation.find({
            startTime: {
                $gte: start,
                $lt: end
            }
        });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});





router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }
        res.status(200).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { reservationFor, underName, startTime, partySize } = req.body;
        const reservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            { reservationFor, underName, startTime, partySize },
            { new: true }
        );

        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        res.status(200).json(reservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!reservation) {
            return res.status(404).json({ error: 'Reservation not found' });
        }

        res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const reservations = await Reservation.find({ reservationFor: req.params.restaurantId });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/restaurant/:restaurantId/date', async (req, res) => {
    const { restaurantId } = req.params;
    const { date } = req.query;

    try {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 1);

        const reservations = await Reservation.find({
            reservationFor: restaurantId,
            startTime: {
                $gte: start,
                $lt: end
            }
        });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



router.get('/restaurant/:restaurantId/today', async (req, res) => {
    const { restaurantId } = req.params;
    try {
        const start = new Date();
        start.setHours(0, 0, 0, 0);
        const end = new Date();
        end.setHours(23, 59, 59, 999);
        const reservations = await Reservation.find({
            reservationFor: restaurantId,
            startTime: {
                $gte: start,
                $lte: end
            }
        });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;

