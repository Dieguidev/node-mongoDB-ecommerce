const express = require('express');
const router = express.Router();
const usersRouter = require('./user.route');
const authRouter = require('./auth.route')

function routerApi(app) {
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
