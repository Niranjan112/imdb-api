const Producer = require("../models/producer");

// Add new producer
exports.addNewProducer = async (req, res) => {
  try {
    // Create new producer and save
    const producer = new Producer(req.body);
    await producer.save();

    res.status(201).json({
      success: true,
      message: "New producer added successfully",
      data: producer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to add new producer",
      error: error.message,
    });
  }
};
