const router = require("express").Router();
const hbs = require('hbs');

// Inject info  from the DATABASE
const dataDB = require('../db/venue.json');

hbs.registerHelper('myHelper', function(string){
    console.log(dataDB[3]["Seating-available"]);
    const seating = dataDB[3]["Seating-available"];
    // Total Numbers of seats
    seating.length = 42;
    // Holding Element 
    let elements = '';

    for (let index = 0; index < seating.length; index++) {

        function classSetup(value) {
            // Check if is a string
            const valueChecked = typeof value;
            // Return Class Base of existence
            return valueChecked === "string" ? "inactive"  : "active";
          }
        const element = `<div class=  ${classSetup(seating[index])}>   ${seating[index] ? seating[index] : "booked"}</div>`;
        elements += element;
    }
    return elements;
});


/* GET home page */
router.get("/", (req, res) => {
 
    res.render("venue", {dataDB} );
});
  

module.exports = router;