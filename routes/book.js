const router = require("express").Router();
const hbs = require('hbs');
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


/* GET home page */

router.get("/booking", (req, res) => {
    //const id = req.params.id; 
    //console.log(id);
    const id = '637f71c85a800615bf8cf4bb';
    Show.findById(id).then( dataMovie => {
        res.render("book", {dataMovie});
    }).catch( error =>{
        console.error(error);
    })
});
  



module.exports = router;