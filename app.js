const express = require('express');
const {
  HomeRouter, RouteRouter, NotFoundRouter, DocRouter,
} = require('./routes/index');

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();

app.use('/', HomeRouter);
app.use('/routes', RouteRouter);
app.use('/doc', DocRouter);

app.use(NotFoundRouter);

module.exports = app;
