// const express = require('express');
import express from 'express';
import  usersRouter  from './user.routes.js';
import  authRouter  from './auth.routes.js';
import  productsRouter  from './product.routes.js';
import  cartsRouter  from './cart.routes.js';
import ordersRouter from './order.routes.js';


const router = express.Router();




export function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/products', productsRouter);
  router.use('/carts', cartsRouter);
  router.use('/orders', ordersRouter);
}




