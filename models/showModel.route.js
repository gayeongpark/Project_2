const { Schema, model } = require("mongoose");

const showSchema = new Schema({
    
    date:{Date, required : true },

    movie:{
        type :  ObjectId,
        ref :  "movie"
    },
      
    Seating: [{
        type: ObjectId,
        ref : "venue"
    }]
},
{
    timestamps: true
});

const Show = model("show", showSchema);

module.exports = Show;
