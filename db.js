const mongoose = require("mongoose");

exports.connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/imdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB", err);
    });
};
