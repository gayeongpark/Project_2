const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password:{ 
    type: String,
    required: true
  },
  authority: {
    type: String,
    enum: ["user", "dev", "admin"]
  } 
},
  {
    timestamps: true
  }
);

const User = model("User-Project2", userSchema);

module.exports = User;
