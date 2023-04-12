const mongoose = require("mongoose");

const Actor = require("../models/actor");
const Movie = require("../models/movie");
const Producer = require("../models/producer");

// Get all movies with their actors and producer
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({})
      .populate("actors")
      .populate("producer")
      .exec();

    res.status(200).json({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch movies",
      error: error.message,
    });
  }
};

// Create a new movie
exports.createNewMovie = async (req, res) => {
  try {
    const { producer, actors } = req.body;

    // Checking if all actors in DB.
    const fetchedActors = await Actor.find({ _id: { $in: actors } });
    if (actors.length != fetchedActors.length) {
      return res.status(400).json({
        success: false,
        message: "Unable to create new movie",
        error: "One or more actors do not exist",
      });
    }

    // Check if producer exist in DB
    const fetchedProducer = await Producer.findById(producer);
    if (!fetchedProducer) {
      return res.status(400).json({
        success: false,
        message: "Unable to create new movie",
        error: "Producer do not exist",
      });
    }

    // Creating movie
    const movie = new Movie(req.body);
    await movie.save();

    // Updating existing producer with new movie.
    fetchedProducer.movies.push(movie._id);
    await fetchedProducer.save();

    res.status(201).json({
      success: true,
      message: "New movie created successfully",
      data: movie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create new movie",
      error: error.message,
    });
  }
};

// Update movie details
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the movie ID is valid
    if (!mongoose.isValidObjectId(id)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid movie ID" });
    }

    // Find the movie document by ID and update it with the request body
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, runValidators: true }
    )
      .populate("actors")
      .populate("producer");

    // Check if the movie document exists
    if (!updatedMovie) {
      return res
        .status(404)
        .json({ success: false, message: "Movie not found" });
    }

    res.status(200).json({
      success: true,
      message: "Movie details updated successfully",
      dtaa: updatedMovie,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to update movie details",
      error: error.message,
    });
  }
};
