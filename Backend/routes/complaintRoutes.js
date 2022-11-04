const express = require('express');
const ComplaintRouter = express.Router();
const ComplaintController = require('../controllers/complaintController');

// Save Compalint
ComplaintRouter.post('/complaint/add', ComplaintController.save_sample);

// GetAll Compalint
ComplaintRouter.get('/complaint/getAll', ComplaintController.getAll_samples);

// Get Compalint By ID
ComplaintRouter.get('/complaint/get/:id', ComplaintController.get_sample);

// Update Compalint
ComplaintRouter.put('/complaint/update/:id', ComplaintController.update_sample);

// Delete Compalint
ComplaintRouter.delete('/complaint/delete/:id', ComplaintController.delete_sample);

module.exports = ComplaintRouter;

