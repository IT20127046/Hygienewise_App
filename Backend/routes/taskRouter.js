const express = require('express');
const TaskRouter = express.Router();
const TaskController = require('../controllers/taskController');

// Save Record
TaskRouter.post('/task/add', TaskController.save_task);

// GetAll Record
TaskRouter.get('/task/getAll', TaskController.getAll_tasks);

// Get Record By ID
TaskRouter.get('/task/get/:id', TaskController.get_task);

// Update Record
TaskRouter.put('/task/update/:id', TaskController.update_task);

// Delete Record
TaskRouter.delete('/task/delete/:id', TaskController.delete_task);

module.exports = TaskRouter;

