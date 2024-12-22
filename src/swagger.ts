import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    version: 'v0.1.0',
    title: 'Unfolding Saion Backend',
    description: 'Implementation of Swagger with TypeScript',
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: '',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
};

const outputFile = './swagger_output.json';
const routes = ['./routes/'];

swaggerAutogen()(outputFile, routes, doc);
