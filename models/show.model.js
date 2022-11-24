const { Schema, model } = require("mongoose");

const showSchema = new Schema({

    date:{
        type: String, 
        required : true 
    },

    venueSeating: {
        type: Number,
        required : true 
    },

    movie : {
        type: Schema.Types.Mixed,
        required: true
    }
},
{
    timestamps: true
});

const Show = model("Show", showSchema);

module.exports = Show;