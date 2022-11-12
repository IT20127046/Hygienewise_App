const mongoose = require("mongoose");

const userResponse = new mongoose.Schema({
    userID: { type: String, required: true },
    userName: { type: String, required: true },
    complaintID: { type: String, required: true },
    reponse: { type: String, required: true }
});

module.exports = mongoose.model("UserResponse", userResponse);