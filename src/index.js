import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  logErrors,
  errorHandler,
  boomErrorHandler,
  mongooseErrorHandler,
} from './middleware/error.handler.js';

import { routerApi } from './routes/index.js';

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('bien conectado'))
  .catch((err) => console.log(err));

app.use(express.json());

const corsOptions = {
  origin: process.env.DOMAIN || 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));

routerApi(app);
app.use(logErrors);
app.use(mongooseErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
