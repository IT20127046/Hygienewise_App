const mongoose = require("mongoose");

const complaint = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageName: { type: String, required: true },
    imagePlace: { type: String},
    imageDate: { type: String},
    authorizedPerson: { type: String},
});

module.exports = mongoose.model("Complaint", complaint);