import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API Documentation',
      version: '1.0.0',
      description: 'API documentation for your Express app',
    },
    servers: [
      {
        url: 'http://localhost:4000', // Change this based on your server URL
        description: 'Local server',
      },
    ],
  },
  apis: ['./server/Routes/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
