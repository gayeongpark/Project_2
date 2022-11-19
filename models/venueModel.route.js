const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    
    date:{Date, required : true },

    movie:{type :  ObjectId,
        ref :  "Movie"},
      
    Seating: [{}]
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
