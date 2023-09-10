// const express = require('express');
import express from 'express';
const router = express.Router();
import  usersRouter  from './user.routes.js';
import  authRouter  from './auth.routes.js';
import  productsRouter  from './product.routes.js';




export function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/products', productsRouter);
}




