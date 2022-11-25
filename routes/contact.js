const router = require('express').Router();
<<<<<<< HEAD
// const bcrypt = require('bcryptjs');
=======
>>>>>>> 26490c07c5104240efcb6e1c922cb905b940fd55
const Contact = require('../models/contact.model');

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact/send', (req, res) => {
  const { firstname, lastname, email, message } = req.body;
<<<<<<< HEAD
=======
  console.log(firstname);
>>>>>>> 26490c07c5104240efcb6e1c922cb905b940fd55
  Contact.create({
    firstname,
    lastname,
    email,
    message
  })
<<<<<<< HEAD
    .then((createdContact) => {
      res.render('contactSend');
    })
    .catch((err) => {
      res.redirect('/');
    });
});

module.exports = router;
=======
  .then(createdContact => {
    const info =  {
      "firstname":firstname,
      "lastname": lastname,
      "email": email
    }
    res.render("contactSend", info)
  })
  .catch (err => {
    res.redirect("/")
  })
  });

module.exports = router;
>>>>>>> 26490c07c5104240efcb6e1c922cb905b940fd55
