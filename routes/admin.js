const router = require("express").Router();
const User = require("../models/User.model");
const bcryptjs = require("bcryptjs");

// Inject info  from the DATABASE
const dataDB = require('../db/movies.loaded.json')

/* GET home page */
router.get("/", (req, res, next) => {
  
    res.render('admin' , {dataDB});
});



module.exports = router;