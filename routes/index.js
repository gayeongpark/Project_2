const router = require("express").Router();


// Inject info  from the DATABASE
const dataDB = require('../db/movies.loaded.json')

/* GET home page */
router.get("/", (req, res) => {
  console.log('Root:');
  console.log(req.session);
  const User = req.session.user;

  // Injecting dataDB
  res.render("index", {dataDB, User});
});



const Test = require("../models/test");

router.get("/add-users", (req, res)=>{
  console.log(Test);
  const username = 'rex';
  const password = '1234';

  console.log(username);
  console.log(password);

  // create the user
  Test.create({
      username: username,
      password: password
  })
  .then(createdUser => {
          console.log(createdUser)
         // res.redirect("/login")
      })
  .catch(err => {
          
  })


});


/*register*/
// router.get("/auth/register", (req, res, next)=>{
//     res.render("register.hbs");
// });

// router.post("/auth/register", (req, res, next)=>{
//     const {username, password} = req.body;
//     if(!username || !password){
//         res.render("register", {message: "Please fill in the required fields to sign up."});
//         return;
//     }

//     if(password.length < 6){
//         res.render("register", {message: "Password should have at least 6 characters."});
//         return;
//     };

//     User.findOne({username})
//     .then((userFromDB)=>{
//         if( userFromDB !== null ){
//             res.render("register", { message: "This Username already exists!" });
//             return;
//         } else {
//             const salt = bcryptjs.genSaltSync();
//             const hashedPassword = bcryptjs.hashSync(password, salt);

//             User.create({username, password: hashedPassword})
//             .then(userFromDB =>{
//                 console.log(userFromDB.password);
//                 res.redirect("/auth/login");
//             })
//         }
//     })
//     .catch(error => next(error));

// });

module.exports = router;
