/**
 * This model is used for store user details
 * @userID, @nicNo, @password, @userName -> String data type and required
 */
 const mongoose = require("mongoose");

 const user = new mongoose.Schema({
    userID: { type: String, required: true },
     userName: { type: String, required: true },
     password: { type: String, required: true },
     authorizedUser: { type: Boolean, default: false },
 });
 
 module.exports = mongoose.model("User", user);