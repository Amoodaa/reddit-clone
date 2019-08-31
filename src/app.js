const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const router = require('./controllers');
// eslint-disable-next-line import/no-extraneous-dependencies

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
