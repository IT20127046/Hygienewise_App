const express = require('express');
const UserTasksRouter = express.Router();
const UserTasksController = require('../controllers/userTasksController');

// Save Record
UserTasksRouter.post('/userTasks/add', UserTasksController.save_record);

// GetAll Record
UserTasksRouter.get('/userTasks/getAll', UserTasksController.getAll_records);

// Get Record By ID
UserTasksRouter.get('/userTasks/get/:id', UserTasksController.get_record);

// Get Record By userID
UserTasksRouter.get('/userTasks/getByUserID/:id', UserTasksController.get_record_by_userID);

// Update Record
UserTasksRouter.patch('/userTasks/update/:id', UserTasksController.update_record);

// Delete Record
UserTasksRouter.delete('/userTasks/delete/:id', UserTasksController.delete_record);

module.exports = UserTasksRouter;

