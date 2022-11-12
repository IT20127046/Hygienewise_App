const express = require('express');
const UserResponseRouter = express.Router();
const UserResponseController = require('../controllers/userResponseController');

// Save Sample
UserResponseRouter.post('/userResponse/add', UserResponseController.save_userResponse);

// GetAll Sample
UserResponseRouter.get('/userResponse/getAll', UserResponseController.getAll_userResponses);

// Get Sample By ID
UserResponseRouter.get('/userResponse/get/:id', UserResponseController.get_userResponse);

// Update Sample
UserResponseRouter.put('/userResponse/update/:id', UserResponseController.update_userResponse);

// Delete Sample
UserResponseRouter.delete('/userResponse/delete/:id', UserResponseController.delete_userResponse);

module.exports = UserResponseRouter;

