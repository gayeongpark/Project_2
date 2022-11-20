// environment variables/settings
require('dotenv/config');

//database connection
require('./db');

// node js framework
const express = require('express');

// handlebars
const hbs = require('hbs');

const app = express();

// config folder
require('./config')(app);
require("./config/session.config")(app);

// default value for title local
const projectName = 'Project_2';

app.locals.title = `${(projectName)}- ironCinema`;

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const admin = require('./routes/admin.routes');
app.use('/admin', admin);

const user = require('./routes/user.routes');
app.use('/user', user);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;

