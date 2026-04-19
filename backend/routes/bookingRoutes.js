const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAvailableSlots,
  getBookings,
} = require("../controllers/bookingController");

router.post("/", createBooking);
router.get("/available", getAvailableSlots);
router.get("/admin", getBookings); // admin

module.exports = router;
