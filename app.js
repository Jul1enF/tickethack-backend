require('dotenv').config()
require('./models/connection')
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var tripsRouter = require('./routes/trips')
var cartRouter = require('./routes/cart')
var bookingsRouter = require('./routes/bookings')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const cors=require('cors')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use('/trips', tripsRouter)
app.use('/cart', cartRouter)
app.use('/bookings', bookingsRouter)

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
