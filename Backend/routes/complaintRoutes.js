const express = require('express');
const ComplaintRouter = express.Router();
const ComplaintController = require('../controllers/complaintController');

// Save Compalint
ComplaintRouter.post('/complaint/add', ComplaintController.save_complaint);

// GetAll Compalint
ComplaintRouter.get('/complaint/getAll', ComplaintController.getAll_complaints);

// Get Compalint By ID
ComplaintRouter.get('/complaint/get/:id', ComplaintController.get_complaint);

// Update Compalint
ComplaintRouter.put('/complaint/update/:id', ComplaintController.update_complaint);

// Delete Compalint
ComplaintRouter.delete('/complaint/delete/:id', ComplaintController.delete_complaint);

module.exports = ComplaintRouter;

