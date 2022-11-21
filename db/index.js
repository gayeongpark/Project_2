// connection with mongodb
const mongoose = require("mongoose");

// DataBase Connected
 const dataBase = 'put your data base here';
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => console.log('DataBase: Connected')
).catch((error)=> console.log(error));