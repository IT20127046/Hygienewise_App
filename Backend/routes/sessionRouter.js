const express = require('express');
const SessionRouter = express.Router();
const SessionController = require('../controllers/sessionsController');

// Save Session
SessionRouter.post('/session/add', SessionController.save_session);

// GetAll Session
SessionRouter.get('/session/getAll', SessionController.getAll_session);

// Get Session By ID
SessionRouter.get('/session/get/:id', SessionController.get_session);

// Update Session
SessionRouter.put('/session/update/:id', SessionController.update_session);

// Delete Session
SessionRouter.delete('/session/delete/:id', SessionController.delete_session);

module.exports = SessionRouter;