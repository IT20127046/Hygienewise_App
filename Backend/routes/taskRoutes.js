const express = require('express');
const TasksRouter = express.Router();
const TasksController = require('../controllers/tasksController');

// Save Record
TasksRouter.post('/tasks/add', SampleController.save_sample);

// GetAll Record
TasksRouter.get('/tasks/getAll', SampleController.getAll_samples);

// Get Record By ID
TasksRouter.get('/tasks/get/:id', SampleController.get_sample);

// Update Record
TasksRouter.put('/tasks/update/:id', SampleController.update_sample);

// Delete Record
TasksRouter.delete('/tasks/delete/:id', SampleController.delete_sample);

module.exports = TasksRouter;

