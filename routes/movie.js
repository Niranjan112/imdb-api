const express = require("express");

const authenticate = require("../middlewares/authenticate");
const { validateRequest } = require("../middlewares/validateRequest");

const {
  createMovieValidationSchema,
  updateMovieValidationSchema,
} = require("../validators/movieValidator");

const {
  createNewMovie,
  getMovies,
  updateMovie,
} = require("../controllers/movie");

const router = express.Router();

router
  .route("/")
  .get(authenticate, getMovies)
  .post(
    authenticate,
    validateRequest(createMovieValidationSchema),
    createNewMovie
  );

router
  .route("/:id")
  .put(authenticate, validateRequest(updateMovieValidationSchema), updateMovie);

module.exports = router;
