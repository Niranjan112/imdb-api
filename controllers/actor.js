const Actor = require("../models/actor");

// Add a new actor
exports.addNewActor = async (req, res) => {
  try {
    // Create new actor and save
    const actor = new Actor(req.body);
    await actor.save();

    res.status(201).json({
      success: true,
      message: "New actor added successfully",
      data: actor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to add new actor",
      error: error.message,
    });
  }
};
