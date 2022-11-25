// connection with mongodb
const mongoose = require("mongoose");

// DataBase Connected
<<<<<<< HEAD
 const dataBase = 'mongodb+srv://rkdud5483:Gyp1963@cluster0.rhvujlh.mongodb.net/movie?retryWrites=true&w=majority';
=======
 const dataBase = process.env.MONGODB_URI;
>>>>>>> 26490c07c5104240efcb6e1c922cb905b940fd55
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => console.log('DataBase: Connected')
).catch((error)=> console.log(error));