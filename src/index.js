// const express = require('express');
import express from 'express';
const app = express();
// const cors = require('cors');
import cors from 'cors';
// const mongoose = require('mongoose');
import mongoose from 'mongoose';
// const dotenv = require('dotenv');
import dotenv from 'dotenv';
// const routerApi = require('./ro  utes/index.route');
import {  routerApi } from './routes/index.js';
// const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');
import { logErrors, errorHandler, boomErrorHandler } from './middleware/error.handler.js';
dotenv.config();



mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('bien conectado'))
  .catch(err => console.log(err)
);
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
