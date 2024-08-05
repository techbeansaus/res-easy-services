const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*', // Adjust according to your needs
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'PATCH'],
    allowedHeaders: ['Authorization', 'Content-Type']
}));

const customerRoutes = require('../../routes/customerRoutes');

const { DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME,DB_PARAMS, PORT = 6001 } = process.env;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}${process.env.DB_PARAMS}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());

app.use('/api/customers', customerRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
