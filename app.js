const express = require('express');
const { HomeRouter } = require('./routes/index');

const app = express();

app.set('port', 5000);

app.use(HomeRouter);

module.exports = app;
