const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');

router.get('/register', (req, res) => {
    res.render('register');
});

  
//Sign up
router.post("/register", (req, res, next)=>{
    // Getting the user from body
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    // create the user
    User.create({
        username: username,
        password: password
    })
    .then(createdUser => {
            console.log('User Up');
            res.redirect("/login");
        })
    .catch(err => {
            next(err)
    })

});

// Login
router.post("/login", (req, res, next) => {
    const  username  = req.body.username;
    const  password  = req.body.password;

    User.findOne({ username: username }).then((dataUser) => {
       
        console.log(req.session.cookie);
        req.session.user = dataUser;
        res.redirect("/");
    }).catch((error) => {
        console.error(error);
    })

});

router.get('/login', (req, res) => {
    res.render('login');
});



// Log-out
router.get('/logout', (req, res, next) => {
    req.session.destroy();
    console.log('destroy');
    res.redirect('/');
  });


module.exports = router;