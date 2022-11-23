const router = require("express").Router();
const Movie = require("../models/movie.model");
const {GodModeLogIn} = require('../middleware/authorization');

// Inject info  from the DATABASE
const dataDB = require('../db/movies.loaded.json')

/* GET home page */
router.get("/", GodModeLogIn,  (req, res, next) => {
  
    res.render('admin' , {dataDB});
});

/* GET add to MOVIE DB page */
router.get("/addmovie", GodModeLogIn , (req, res) => {
    res.render("addMovie")
})

/*posting new Movie document to DB*/
router.post("/addmovie", GodModeLogIn,	(req, res, next) => {
    // Save each value from body req
    const { title, year, director, duration, img, genre, trailer, plot } = req.body;  
    // Create data from movie 
    Movie.create({title, year, director, duration, img, genre, trailer, plot})
    .then((newMovie) => {
        console.log( `The Movie ${newMovie} was added`)
        res.redirect("/admin")
    })
    .catch((error) => {
       // res.redirect("/admin/addmovie");
        next(error);
    });
});        

/* GET add to SHOW DB page */
router.get("/createshow", GodModeLogIn , (req, res) => {
    res.render("createShow")
})

/*posting new Movie document to DB*/
router.post("/createshow",	GodModeLogIn, (req, res, next) => {
    const { date, movie, venueSeating, freeSeating} = req.body;  

    Movie.create({date, movie, venueSeating, freeSeating})
    .then((newShow) => {
        res.redirect("/");
        console.log( `Now showing ${newMovie.movie.title} on ${newMovie.date}`)
    })  

    .catch((error) => {
        res.redirect("admin/addmovie");
        next(error);
    });
});        



module.exports = router;