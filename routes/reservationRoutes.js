const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const Customer = require('../models/Customer');
const Restaurant = require('../models/Restaurant');
const { v4: uuidv4 } = require('uuid');

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       required:
 *         - reservationFor
 *         - underName
 *         - startTime
 *         - partySize
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the reservation
 *         reservationFor:
 *           type: string
 *           description: The ID of the restaurant for which the reservation is made
 *         underName:
 *           type: string
 *           description: The ID of the customer under whose name the reservation is made
 *         startTime:
 *           type: string
 *           format: date
 *           description: The start time of the reservation
 *         partySize:
 *           type: integer
 *           description: The size of the party
 *       example:
 *         id: d5fE_asz
 *         reservationFor: 123456
 *         underName: 78910
 *         startTime: 2023-07-20T19:00:00Z
 *         partySize: 4
 */

/**
 * @swagger
 * /api/reservations:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       201:
 *         description: The reservation was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       400:
 *         description: Bad request
 */
router.post('/', async (req, res) => {
    const { reservationFor, customerName, customerPhone, startTime, partySize } = req.body;

    try {
        let customer = await Customer.findOne({ telephone: customerPhone });
        if (!customer) {
            customer = new Customer({
                givenName: customerName,
                telephone: customerPhone
            });
            await customer.save();
        }

        const newReservation = new Reservation({
            reservationFor,
            underName: customer.id,
            startTime,
            partySize
        });

        await newReservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/reservations:
 *   get:
 *     summary: Get all reservations
 *     tags: [Reservation]
 *     responses:
 *       200:
 *         description: The list of reservations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/reservations/{id}:
 *   get:
 *     summary: Get a reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation ID
 *     responses:
 *       200:
 *         description: The reservation description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reservation not found
 */
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

/**
 * @swagger
 * /api/reservations/{id}:
 *   put:
 *     summary: Update a reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reservation'
 *     responses:
 *       200:
 *         description: The reservation was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 *       404:
 *         description: Reservation not found
 *       400:
 *         description: Bad request
 */
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

/**
 * @swagger
 * /api/reservations/{id}:
 *   delete:
 *     summary: Delete a reservation by ID
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The reservation ID
 *     responses:
 *       200:
 *         description: The reservation was successfully deleted
 *       404:
 *         description: Reservation not found
 */
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

/**
 * @swagger
 * /api/reservations/restaurant/{restaurantId}:
 *   get:
 *     summary: Get all reservations for a restaurant
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: The list of reservations for the restaurant
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
router.get('/restaurant/:restaurantId', async (req, res) => {
    try {
        const reservations = await Reservation.find({ reservationFor: req.params.restaurantId });
        res.status(200).json(reservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/reservations/restaurant/{restaurantId}/date:
 *   get:
 *     summary: Get all reservations for a restaurant on a specific date
 *     tags: [Reservation]
 *     parameters:
 *       - in: path
 *         name: restaurantId
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: The date for which to fetch reservations
 *     responses:
 *       200:
 *         description: The list of reservations for the restaurant on the specified date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
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


/**
 * @swagger
 * /api/reservations/restaurant/{restaurantId}/today:
 *   get: get:
 *     summary: Get all reservations for a restaurant for today's date
 *     tags: [Reservation]
 *     parameters::
 *       - in: path
 *         name: restaurantIdrantId
 *         schema:
 *           type: string
 *         required: true
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: The list of reservations for the restaurant for today's date
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
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

