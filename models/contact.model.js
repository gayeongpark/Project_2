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

  )

  const Contact = model("Contact", contactSchema);

  module.exports = Contact;