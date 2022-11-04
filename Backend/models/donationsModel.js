const mongoose = require("mongoose");

const donations = new mongoose.Schema({
    place: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("Donations", donations);