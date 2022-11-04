const mongoose = require("mongoose");

const sessions = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model("Sessions", sessions);