const Service = require("../models/Service");

// GET /api/services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services" });
  }
};

// ✅ CREATE SERVICE
exports.createService = async (req, res) => {
  try {
    const { name, price, duration } = req.body;

    // basic validation
    if (!name || !price || !duration) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newService = new Service({
      name,
      price,
      duration,
    });

    await newService.save();

    res.status(201).json({
      message: "Service created successfully ",
      service: newService,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating service" });
  }
};
