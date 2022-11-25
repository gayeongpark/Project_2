const { Schema, model } = require("mongoose")

const contactSchema = new Schema({
    firstname: {
      type: String,
      require: true
    },
    lastname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
  },
  {
    timestamps: true
}
<<<<<<< HEAD
  
  )
  
  const Contact = model("Contact", contactSchema);
  
=======

  )

  const Contact = model("Contact", contactSchema);

>>>>>>> 26490c07c5104240efcb6e1c922cb905b940fd55
  module.exports = Contact;