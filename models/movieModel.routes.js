const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
    
    title:{String, required : true },

    year:{Number, required : true },
    
    director:{String, required : true },
      
    duration: {String, required : true },

    img:"https://static.kino.de/wp-content/uploads/2015/08/black-christmas-2006-filmplakat.jpg",
      
    genre: Array,

    trailer: String,
    
    plot: {String, required : true }
},
{
    timestamps: true
});

const Movie = model("movie", movieSchema);

module.exports = Movie;
