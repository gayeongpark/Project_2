// connection with mongodb
const mongoose = require("mongoose");

// MongoDB URI 
const MONGO_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/project_2";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
