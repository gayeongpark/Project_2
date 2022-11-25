const router = require("express").Router();
const Movie = require("../models/movie.model");
const Show = require("../models/show.model");

// Inject info  from the DATABASE

/* GET home page */
router.get("/", (req, res) => {
  // Injecting dataDB
  Show.find().then( (dataDB) => {
    res.render("index", {dataDB});
  }).catch( error =>{
    console.error(error);
  })

});


/* Get FAQ page */
router.get("/faq", (req, res) => {
  res.render("faq");
});


/* Get Imprint page */
router.get("/imprint", (req, res) => {
  res.render("imprint");
});


module.exports = router;
