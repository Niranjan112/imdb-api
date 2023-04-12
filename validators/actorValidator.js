const Joi = require("joi");
const Gender = require("../enums/gender");
const { past1YearDate } = require("../utils/date");

const allowedGenders = Object.values(Gender);

exports.actorValidationSchema = Joi.object({
  name: Joi.string().required(),
  gender: Joi.string()
    .valid(...allowedGenders)
    .required(),
  dob: Joi.date().iso().max(past1YearDate).required().messages({
    "date.max": "Age must be at least 1 year old",
    "any.required": "Date of birth is required",
  }),
  bio: Joi.string().required(),
});
