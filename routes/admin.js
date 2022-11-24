const router = require("express").Router();
const Movie = require("../models/movie.model");
const Contact = require("../models/contact.model");
const Show = require("../models/show.model");
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
    const { title, year, director, duration, img, poster, genre, trailer, plot } = req.body;  
    // Create data from movie 
    Movie.create({title, year, director, duration, img, poster, genre, trailer, plot})
    .then((newMovie) => {
        console.log( `The Movie ${newMovie} was added`);
        res.redirect("/admin/addmovie");
    })
    .catch((error) => {
        next(error);
    });
});        

/* GET add to SHOW DB page */
router.get("/createshow", GodModeLogIn , (req, res) => {
    Movie.find().sort({createdAt: -1})
    .then((film) => {
        res.render("createShow", {film})
    })
    .catch(err => {console.error(err)})
})

/*Posting new Show document to DB*/
router.post("/createshow",	GodModeLogIn, (req, res, next) => {
    const { date, venueSeating, movie} = req.body;  
    
    Movie.findOne({_id: movie})
    .then(data => {
        Show.create({date, venueSeating, movie:data})
        .catch((error) => {
            res.redirect("/admin/createshow");
            next(error);
        });

    });
});   


router.get("/messages", GodModeLogIn , (req, res) => {
    
        Contact.find().sort({createdAt: -1 }).then((result) =>{
            console.log(result);
            res.render("messages" ,  {result})
        }).catch(error => {
            console.error(error);
        });
})



module.exports = router;