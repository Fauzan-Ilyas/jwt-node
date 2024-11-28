const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://muhammadfauzan92979:kGa1uiTc9ZMtresJ@backend.tsyrz.mongodb.net/jwt_db?retryWrites=true&w=majority&appName=backend",
  {
    serverSelectionTimeoutMS: 5000,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Conncted to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
