const mongoose = require("mongoose");

const challenge = new mongoose.Schema({
    challengeName: { type: String, required: true },
    createdDate: { type: Date, required: true },
    taskList: [{ type: Object, required: true }],
});

module.exports = mongoose.model("Challenges", challenge);