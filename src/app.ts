import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { Application, NextFunction, Request, Response } from 'express';
import { CustomError } from './app/interface/error.interface';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
// import swaggerDocument from './swagger_output.json';
import router from './routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Unfolding Saion Backend',
      version: '1.0.0',
      description: 'A sample Express.js API built with TypeScript and Swagger',
    },
  },
  apis: ['./src/routes/index.ts'],
  encoding: 'utf-8',
  failOnErrors: false,
  verbose: true,
  format: 'json',
  definition: {},
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Working');
});

// app.use(globalErrorHandler);

// Not Found
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const error: CustomError = new Error(
    `Can't find ${req.originalUrl} route on the server`
  );
  error.status = 404;
  next(error);
});

export default app;
