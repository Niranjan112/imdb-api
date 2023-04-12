var express = require("express");
var router = express.Router();

const jwt = require("jsonwebtoken");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Simple login
router.get("/login", (req, res) => {
  try {
    // Check if the username and password are valid
    const { userId, password } = req.body;

    // Hard coded username and password here only just to show token based authentication for bonus.
    if (userId != "niranjan112" || password != "Test@123") {
      return res.status(401).json({ message: "Invalid user id or password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Return the token
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
