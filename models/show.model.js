const { Schema, model } = require("mongoose");

const showSchema = new Schema({

    date:{Date, required : true },

    movie: [{
        id: {
        type :  ObjectId,
        ref :  "movie"
        }, 
    }],

    venueSeating: [{
        type: ObjectId.seating,
        ref : "venue"
    }],

    freeSeating: [{
        type: ObjectId.seating,
        ref : "venue"
    }]
},
{
    timestamps: true
});

const Show = model("Show", showSchema);