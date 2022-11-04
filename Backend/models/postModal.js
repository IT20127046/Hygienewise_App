const mongoose = require("mongoose");

const post = new mongoose.Schema({
    title: { type: String, required: true },
    // image: { type: String, required: true },    
    description: { type: String, required: true },
    publishDate: { type: String, required: true },
    publishTime: { type: String, required: true },
});

module.exports = mongoose.model("post details", post);