const express = require('express');
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

const reservationRoutes = require('../../routes/reservationRoutes');

const { DB_USERNAME,DB_PASSWORD,DB_HOST,DB_NAME,DB_PARAMS, PORT = 6002 } = process.env;

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}${process.env.DB_PARAMS}`)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());

app.use('/api/reservations', reservationRoutes);

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Restaurant API',
            version: '1.0.0',
            description: 'API for managing restaurants, tables, bookings, and customers',
            contact: {
                name: 'Developer',
                email: 'developer@example.com'
            }
        },
        servers: [{
            url: `http://localhost:${PORT}`
        }]
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
