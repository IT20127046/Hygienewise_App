const express = require('express');
const ChallengeRouter = express.Router();
const ChallengeController = require('../controllers/challengeController');

// Save Record
ChallengeRouter.post('/challenge/add', ChallengeController.save_challenge);

// GetAll Record
ChallengeRouter.get('/challenge/getAll', ChallengeController.getAll_challenges);

// Get Record By ID
ChallengeRouter.get('/challenge/get/:id', ChallengeController.get_challenge);

// Update Record
ChallengeRouter.put('/challenge/update/:id', ChallengeController.update_challenge);

// Delete Record
ChallengeRouter.delete('/challenge/delete/:id', ChallengeController.delete_challenge);

module.exports = ChallengeRouter;

