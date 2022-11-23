// connection with mongodb
const mongoose = require("mongoose");

// DataBase Connected
 const dataBase = 'mongodb+srv://rkdud5483:Gyp1963@cluster0.rhvujlh.mongodb.net/movie?retryWrites=true&w=majority';
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => console.log('DataBase: Connected')
).catch((error)=> console.log(error));