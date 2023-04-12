const express = require("express");

const authenticate = require("../middlewares/authenticate");
const { validateRequest } = require("../middlewares/validateRequest");

const { actorValidationSchema } = require("../validators/actorValidator");

const { addNewActor } = require("../controllers/actor");

const router = express.Router();

router
  .route("/")
  .post(authenticate, validateRequest(actorValidationSchema), addNewActor);

module.exports = router;
