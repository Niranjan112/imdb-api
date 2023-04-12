const mongoose = require("mongoose");
const Gender = require("../enums/gender");

const producerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    gender: {
      type: String,
      enum: Object.values(Gender),
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    bio: {
      type: String,
      required: true,
      trim: true,
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  { versionKey: false }
);

const Producer = mongoose.model("Producer", producerSchema);

module.exports = Producer;
