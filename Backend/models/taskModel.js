const mongoose = require("mongoose");

const tasks = new mongoose.Schema({
    userId: { type: String, required: true },
    taskName: { type: String, required: true },
    taskType: { type: String, required: true },
    taskDescription: { type: String, required: false },
});

module.exports = mongoose.model("Tasks", tasks);