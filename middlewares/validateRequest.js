const Joi = require("joi");

// Function to accept joi validation schema and validate it.
exports.validateRequest = (schema) => {
  return (req, res, next) => {
    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };

    const { error, value } = schema.validate(req.body, options);
    if (error) {
      const errors = error.details.map((x) => x.message);
      return res.status(400).json({ message: "Validation error", errors });
    } else {
      req.body = value;
      next();
    }
  };
};
