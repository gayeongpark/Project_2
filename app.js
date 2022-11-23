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

// Comment  
require("./config/session.config")(app);

// default value for title local
const projectName = 'Project_2';

app.locals.title = `${(projectName)}- ironCinema`;



// No Idea why this bullshit is workin.
app.use(( req, res, next) => {
    hbs.registerHelper('GODMODE', function(string){
        // Getting the username with req from middleware
        let User = 'Pula';
        if(req.session.user) {
            User = req.session.user.username;
        } 
        if( User === 'admin'){
            return '<a  href="/admin" class="btn btn-light">Admin Login</a>';
        } else {
            return '';
        }
    });
    next();
})


// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const venue = require('./routes/venue');
app.use('/venue', venue);

const admin = require('./routes/admin');
app.use('/admin', admin);

const auth = require("./routes/auth");
app.use("/", auth);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;

