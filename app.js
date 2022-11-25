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
        let GOD = 'Pula';
        if(req.session.user) {
            GOD = req.session.user.username;
        } 
        
        if( GOD === 'admin'){
            return '<a  href="/admin" class="btn btn-light">Admin CMS</a>';
        } else {
            return '';
        }
    });

    hbs.registerHelper('username', function(string){
        // Getting the username with req from middleware
        let User = '';
        if(req.session.user) {
            User = req.session.user.username;
        } 
        console.log(User);
        if(User){
            return `<div class="user">Welcome: ${User}</div>  <div> <a href="/logout" class="btn btn-light">Logout</a> </div>`;
        } else {
            return "<a href='/login' class='btn btn-light'>Log in</a> <a href='/register' class='btn btn-light'>Register</a>";
        }
    });

    next();
})


// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const book = require('./routes/book');
app.use('/', book);

const admin = require('./routes/admin');
app.use('/admin', admin);

const auth = require("./routes/auth");
app.use("/", auth);

const contact = require('./routes/contact');
app.use('/', contact);

const terms = require('./routes/terms');
app.use('/', terms);

const map = require('./routes/map');
app.use('/', map);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;

