const mongoose = require("mongoose");

const userTasks = new mongoose.Schema({
    userId: { type: String, required: true },
    dailyTasks: [{ type: Object, required: true }],
    challenges: [{ type: Object, required: true }],
    otherTasks: [{ type: Object, required: true }],
});

module.exports = mongoose.model("UserTasks", userTasks);