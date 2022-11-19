//.env settings
require('dotenv/config');

//connect to database
require('./db');

//Handlebars
const hbs = require('hbs');

//load express.js
const express = require('express')

// init app & Middleware
const app = express()

//getting exports from config.
require('./config')(app);

// default value for title local
const projectName = 'Project2';

app.locals.title = `${(projectName)}: ironCINEMA`;

// Routes
const indexRoutes = require('./routes/index.routes')
app.use('/', indexRoutes);

const adminRoutes = require('./routes/admin.routes')
app.use('/', adminRoutes);

const userBookingRoutes = require('./routes/userBooking.routes')
app.use('/', userBookingRoutes);

// ❗ To handle errors
require('./error-handling')(app);



module.exports = app;
