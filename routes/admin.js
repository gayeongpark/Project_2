const router = require("express").Router();
const Movie = require("../models/movie.model");
const Contact = require("../models/contact.model");
const Show = require("../models/show.model");
const {GodModeLogIn} = require('../middleware/authorization');

// Inject info  from the DATABASE
const dataDB = require('../db/movies.loaded.json');



/* GET home page */
router.get("/", GodModeLogIn,  (req, res) => {
  // Injecting dataDB
  Show.find().then( (dataDB) => {
    res.render('admin', {dataDB});
  }).catch( error =>{
    console.error(error);
  })
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
            res.redirect("/admin")
    }).catch(error => {
        next(error);
    });
});   


/* Deleting movie from admin cms */
router.delete('/deleteshow/:id' , GodModeLogIn, (req, res) => {
    console.log('delete');
    const id = req.params.id;
    Show.deleteOne({ _id: id}).then(data => {
        console.log(data);
        res.redirect("/admin/")
    } ).catch(error => console.error(error));
});


/* Edit  movie from admin cms */
router.get('/editshow/:id' , GodModeLogIn, (req, res) => {
    console.log('Edit');
    const id = req.params.id;
    console.log(id);
    Show.findById({_id: id}).then(data => {
        Movie.find().sort({createdAt: -1})
       
        .then((film) => {
            console.log(film);
            const infoData =  {
                "id":data.id,
                "date":data.date,
                "venueSeating":data.venueSeating,
                "movie":data.movie.title,
                "year":data.movie.year,
                "film": film
            }
            res.render("editShow", infoData );
        }).catch(error=> console.error(error));

    } ).catch(error => console.error(error));
});

/* Edit  movie from admin cms */
router.post('/updateshow/:id' , GodModeLogIn, (req, res) => {
    const { date, venueSeating, movie} = req.body;  
 
    const idShow = req.params.id;
    Movie.findOne({_id: movie})
    .then(data => {
        console.log(data);
         Show.findByIdAndUpdate(idShow, {date, venueSeating, movie:data}).then( data => {
            console.log('updated');
            res.redirect('/admin');
         }).catch( error =>{
            console.error(error);
         })
    

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