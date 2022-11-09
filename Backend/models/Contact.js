const mongoose = require("mongoose");

const contact = new mongoose.Schema({
    title: { type: String, required: true },
    issue: { type: String, required: true },
    reply: { type: String }
});

module.exports = mongoose.model("Contacts", contact);