const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       required:
 *         - givenName
 *         - familyName
 *         - email
 *         - telephone
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the customer
 *         givenName:
 *           type: string
 *           description: The given name of the customer
 *         familyName:
 *           type: string
 *           description: The family name of the customer
 *         email:
 *           type: string
 *           description: The email of the customer
 *         telephone:
 *           type: string
 *           description: The telephone number of the customer
 *         birthDate:
 *           type: string
 *           format: date
 *           description: The birth date of the customer
 *         address:
 *           type: object
 *           properties:
 *             streetAddress:
 *               type: string
 *               description: The street address
 *             addressLocality:
 *               type: string
 *               description: The locality
 *             addressRegion:
 *               type: string
 *               description: The region
 *             postalCode:
 *               type: string
 *               description: The postal code
 *             addressCountry:
 *               type: string
 *               description: The country
 *       example:
 *         id: d5fE_asz
 *         givenName: John
 *         familyName: Doe
 *         email: john.doe@example.com
 *         telephone: 123-456-7890
 *         birthDate: 1980-01-01
 *         address:
 *           streetAddress: 123 Main St
 *           addressLocality: Anytown
 *           addressRegion: CA
 *           postalCode: 12345
 *           addressCountry: US
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Create a new customer
 *     tags: [Customer]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       201:
 *         description: The customer was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       400:
 *         description: Bad request
 */
router.post('/', async (req, res) => {
    const { givenName, familyName, email, telephone, birthDate, address } = req.body;

    try {
        const newCustomer = new Customer({
            givenName,
            familyName,
            email,
            telephone,
            birthDate,
            address
        });

        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Get all customers
 *     tags: [Customer]
 *     responses:
 *       200:
 *         description: The list of customers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Customer'
 */
router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Get a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: The customer description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 */
router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Update a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 *     responses:
 *       200:
 *         description: The customer was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Customer'
 *       404:
 *         description: Customer not found
 *       400:
 *         description: Bad request
 */
router.put('/:id', async (req, res) => {
    try {
        const { givenName, familyName, email, telephone, birthDate, address } = req.body;
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            { givenName, familyName, email, telephone, birthDate, address },
            { new: true }
        );

        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.status(200).json(customer);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Delete a customer by ID
 *     tags: [Customer]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The customer ID
 *     responses:
 *       200:
 *         description: The customer was successfully deleted
 *       404:
 *         description: Customer not found
 */
router.delete('/:id', async (req, res) => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
