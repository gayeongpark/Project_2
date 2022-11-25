const router = require("express").Router();
const hbs = require('hbs');
const bcrypt = require('bcryptjs');
const Show = require("../models/show.model");

// Inject info  from the DATABASE
//const dataDB = require('../db/venue.json');

// hbs.registerHelper('myHelper', function(string){
//     console.log(dataDB[3]["Seating-available"]);
//     const seating = dataDB[3]["Seating-available"];
//     // Total Numbers of seats
//     seating.length = 42;
//     // Holding Element 
//     let elements = '';

//     for (let index = 0; index < seating.length; index++) {
//         function classSetup(value) {
//             // Check if is a string
//             const valueChecked = typeof value;
//             // Return Class Base of existence
//             return valueChecked === "string" ? "inactive"  : "active";
//           }
//         const element = `<div class=  ${classSetup(seating[index])}>   ${seating[index] ? seating[index] : "booked"}</div>`;
//         elements += element;
//     }
//     return elements;
// });


// hbs.registerHelper('book', function(string){
//     let element;
//     const id = '637f71c85a800615bf8cf4bb';
//     Show.findById(id).then( dataMovie => {
//         console.log('data: ', dataMovie);
//         element = dataMovie;
//         console.log(element)
//         return '32';
//     }).catch( error =>{
//         console.error(error);
//     })
//     console.log('element',element);
//     return element;
// });


/* GET home page */

router.get("/booking/:id", (req, res) => {
    const id = req.params.id; 
    Show.findById(id).then( dataMovie => { 
        res.render("book", {dataMovie});
    }).catch( error =>{
        console.error(error);
    })
});
  

router.post("/booking/:id", (req, res) => {
    
    const quantity  = req.body.quantity;
    let totalNumber
    Show.findById(req.params.id).then( data => {
        console.log(data.venueSeating);
         totalNumber  = data.venueSeating - quantity;
         Show.findByIdAndUpdate(req.params.id , { venueSeating: totalNumber } ).then( update =>{
        })
    }).catch( error=>{
        console.error(error);
    })

    const User = req.session.user.username;
    const email = req.session.user.email;
    const ticktNumber = bcrypt.hashSync(req.params.id);
    const seatsPurchase = quantity;

    const info =  {
        "ticktNumber":ticktNumber,
        "user":User,
        "email":email,
        "date": Date.parse(),
        "quantity":quantity,

    }

    res.render('bookingsMessage', info);
    
});
  


module.exports = router;