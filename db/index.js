// connection with mongodb
const mongoose = require("mongoose");

// DataBase Connected
 const dataBase = 'mongodb+srv://donrob3r7:donrob3r7@nodetuts.qjfzzzs.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dataBase, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (result) => console.log('DataBase: Connected')
).catch((error)=> console.log(error));