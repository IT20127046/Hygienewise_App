const express = require('express');
const DonationRouter = express.Router();
const DonationController = require('../controllers/donationsController');

// Save Donation
DonationRouter.post('/donation/add', DonationController.save_donation);

// GetAll Donation
DonationRouter.get('/donation/getAll', DonationController.getAll_donations);

// Get Donation By ID
DonationRouter.get('/donation/get/:id', DonationController.get_donation);

// Update Donation
DonationRouter.put('/donation/update/:id', DonationController.update_donation);

// Delete Donation
DonationRouter.delete('/donation/delete/:id', DonationController.delete_donation);

module.exports = DonationRouter;