const router = require('express').Router();
const Contact = require('../models/contact.model');

router.get('/contact', (req, res) => {
  res.render('contact');
});

router.post('/contact/send', (req, res) => {
  const { firstname, lastname, email, message } = req.body;
  Contact.create({
    firstname,
    lastname,
    email,
    message
  })
  .then(createdContact => {
    res.render("contactSend")
  })
  .catch (err => {
    res.redirect("/")
  })
  });

module.exports = router;