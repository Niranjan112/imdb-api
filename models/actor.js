const mongoose = require("mongoose");
const Gender = require("../enums/gender");

const actorSchema = new mongoose.Schema(
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
  },
  { versionKey: false }
);

const Actor = mongoose.model("Actor", actorSchema);

module.exports = Actor;
