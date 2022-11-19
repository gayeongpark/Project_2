//Access `body` property in requests
const express = require("express");

//request logger
const logger = require("morgan");

// come to the dark side, we have cookies
const cookieParser = require("cookie-parser");

// serve-favicon: npm middleware
const favicon = require("serve-favicon");

const path = require("path");

module.exports = (app) => {

    app.use(logger("dev"));
  
    // To have access to `body` property in the request
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
  
    // Normalise folder paths
    app.set("views", path.join(__dirname, "..", "views"));

    // Sets the view engine to handlebars
    app.set("view engine", "hbs");

    // Handles access to the public folder
    app.use(express.static(path.join(__dirname, "..", "public")));
  
    // Handles access to the favicon
    app.use(favicon(path.join(__dirname, "..", "public", "images", "favicon.ico")));
  };