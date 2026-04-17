const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Service = require("../models/Service");

dotenv.config();

const services = [
  { name: "Haircut", price: 150, duration: 30 },
  { name: "Beard Trim", price: 80, duration: 15 },
  { name: "Haircut + Beard", price: 200, duration: 45 },
  { name: "Facial", price: 300, duration: 60 },
  { name: "Hair Spa", price: 400, duration: 60 },
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // clear old data (optional)
    await Service.deleteMany();

    // insert new data
    await Service.insertMany(services);

    console.log("Services added successfully ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();
