
const ContactModel = require("../models/Contact");

// Save Contacts
const save_contacts = function (req, res){
    let newcontact = new ContactModel(req.body);

    newcontact.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true
        });
    });
}

// GetAll Contacts
const getAll_contacts = function (req, res){
    ContactModel.find().exec((err, exsitingContacts) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingContacts,
        });
      });
}

// Get Contacts By ID
const get_contact = function (req, res){
    let contactID = req.params.id;

    ContactModel.findById(contactID,(err,exsitingContacts)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingContacts
        });
    });
}

// Update Contacts
const update_contacts = function (req, res){
    ContactModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, contact)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Contact
const delete_contact = function (req, res){
    ContactModel.findByIdAndRemove(req.params.id).exec((err,deletedcontact)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedcontact
        });

    });
}

module.exports = {save_contacts, getAll_contacts, get_contact, update_contacts, delete_contact};