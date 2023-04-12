const express = require("express");

const authenticate = require("../middlewares/authenticate");
const { validateRequest } = require("../middlewares/validateRequest");

const { producerValidationSchema } = require("../validators/producerValidator");

const { addNewProducer } = require("../controllers/producer");

const router = express.Router();

router
  .route("/")
  .post(
    authenticate,
    validateRequest(producerValidationSchema),
    addNewProducer
  );

module.exports = router;
