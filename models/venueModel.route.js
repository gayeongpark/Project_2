const { Schema, model } = require("mongoose");

const venueSchema = new Schema({
    
    date:{Date, required : true },

    movie:{
        type :  ObjectId,
        ref :  "movie"
    },
      
    Seating: [{}]
});

const Venue = model("venue", venueSchema);

module.exports = Venue;
