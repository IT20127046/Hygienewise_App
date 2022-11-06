const mongoose = require("mongoose");

const tasks = new mongoose.Schema({
    userId: { type: String, required: true },
    dailyTasks: [{ type: Object, required: true }],
    challenges: [{ type: Object, required: true }],
    otherTasks: [{ type: Object, required: true }],
    completedDailyTasks: [{ type: Object, required: true }],
    completedChallenges: [{ type: Object, required: true }],
    completedOtherTasks: [{ type: Object, required: true }],
});

module.exports = mongoose.model("Tasks", tasks);