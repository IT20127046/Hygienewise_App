const express = require('express');
const ContactRouter = express.Router();
const ContactController = require('../controllers/contactsController');

// Save Contact
ContactRouter.post('/contact/add', ContactController.save_contacts);

// GetAll Contact
ContactRouter.get('/contact/getAll', ContactController.getAll_contacts);

// Get Contact By ID
ContactRouter.get('/contact/get/:id', ContactController.get_contact);

// Update Contact
ContactRouter.put('/contact/update/:id', ContactController.update_contacts);

// Delete Contact
ContactRouter.delete('/contact/delete/:id', ContactController.delete_contact);

module.exports = ContactRouter;