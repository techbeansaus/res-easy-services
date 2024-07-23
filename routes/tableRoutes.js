const express = require('express');
const router = express.Router();
const Table = require('../models/Table');
const Reservation = require('../models/Reservation');
const Customer = require('../models/Customer');

// Create a single table for a restaurant
router.post('/restaurant/:restaurantId/table', async (req, res) => {
    const { restaurantId } = req.params;
    const { number, seats, status } = req.body;

    try {
        const table = new Table({
            number,
            seats,
            restaurantId,
            status: status || 'available'
        });

        await table.save();
        res.status(201).json(table);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Create multiple tables in bulk for a restaurant
router.post('/restaurant/:restaurantId/tables', async (req, res) => {
    const { restaurantId } = req.params;
    const tables = req.body.tables;

    try {
        const tableDocs = tables.map(table => ({
            ...table,
            restaurantId,
            status: table.status || 'available'
        }));

        const createdTables = await Table.insertMany(tableDocs);
        res.status(201).json(createdTables);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add a reservation to a table
router.post('/table/:tableId/reservation', async (req, res) => {
    const { tableId } = req.params;
    const { name, phone, startTime, partySize } = req.body;

    try {
        const customer = new Customer({ name, phone });
        await customer.save();

        const reservation = new Reservation({
            reservationFor: tableId,
            underName: customer.id,
            startTime,
            partySize
        });
        await reservation.save();

        const table = await Table.findById(tableId);
        table.status = 'reserved';
        table.reservedFor = reservation.id;
        await table.save();

        res.status(201).json({ table, reservation });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Add reservations to multiple tables in bulk
router.post('/tables/reservations', async (req, res) => {
    const reservations = req.body.reservations;

    try {
        const createdReservations = [];

        for (let i = 0; i < reservations.length; i++) {
            const { tableId, name, phone, startTime, partySize } = reservations[i];

            const customer = new Customer({ name, phone });
            await customer.save();

            const reservation = new Reservation({
                reservationFor: tableId,
                underName: customer.id,
                startTime,
                partySize
            });
            await reservation.save();

            const table = await Table.findById(tableId);
            table.status = 'reserved';
            table.reservedFor = reservation.id;
            await table.save();

            createdReservations.push({ table, reservation });
        }

        res.status(201).json(createdReservations);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
