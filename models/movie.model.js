const { Schema, model } = require("mongoose");

const movieSchema = new Schema({

    title:{
        type: String, 
        required: true},

    year:{
        type: Number, 
        required: true
      },

    director:{
        type: String, 
        required: true
      },

    duration: {
        type: String, 
        required: true
      },

    img: {
        type: String, 
        required: true
      },
    poster: {
        type: String, 
        required: true
    },  
    genre: {
        type: Array, 
        required: true
      },

    trailer: {
        type: String, 
        required: true
      },

    plot: {
        type: String, 
        required: true
      }
},
{
    timestamps: true
});
const Movie = model("Movie", movieSchema);
module.exports = Movie;