const { Schema, model } = require("mongoose");

const showSchema = new Schema({
    
    date:{Date, required : true },

    movie:{
        type :  ObjectId,
        ref :  "movie"
    },
      
    venueSeating: [{
        type: ObjectId,
        ref : "venue"
    }]
},
{
    timestamps: true
});

const Show = model("how", showSchema);
S
module.exports = Show;
