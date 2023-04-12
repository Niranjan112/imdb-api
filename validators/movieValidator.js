const Joi = require("joi");

exports.createMovieValidationSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  yearOfRelease: Joi.number()
    .integer()
    .max(new Date().getFullYear())
    .required(),
  plot: Joi.string().required(),
  poster: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .pattern(/\.(jpg|jpeg|png|gif)$/i)
    .required(),
  actors: Joi.array().items(Joi.string().trim().required()),
  producer: Joi.string().required(),
});

exports.updateMovieValidationSchema = Joi.object({
  name: Joi.string().min(1).max(255),
  yearOfRelease: Joi.number().integer().max(new Date().getFullYear()),
  plot: Joi.string(),
  poster: Joi.string()
    .uri({ scheme: ["http", "https"] })
    .pattern(/\.(jpg|jpeg|png|gif)$/i),
  actors: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)),
  producer: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
});
