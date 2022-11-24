const router = require("express").Router();
const Movie = require("../models/movie.model");
const Show = require("../models/show.model");

// Inject info  from the DATABASE
//const dataDB = require('../db/movies.loaded.json')
const {isUserLogIn} = require('../middleware/authorization');

/* GET home page */
router.get("/", (req, res) => {
  // Injecting dataDB
  Show.find().then( (dataDB) => {
    res.render("index", {dataDB});
  }).catch( error =>{
    console.error(error);
  })

});



// Comment bcz we dont have the same DATABASE

// router.get("/", (req, res, next) => {
//   Movie.find()
//   .then ( (dataDB) => {
//     console.log("poof")
//     res.render("index" , {dataDB})

//   }).catch( error => {
//     console.error(error);
//   }
// )});

/* Get FAQ page */
router.get("/faq", (req, res) => {
  res.render("faq");
});

module.exports = router;
