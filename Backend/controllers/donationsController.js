
const DonationsModel = require("../models/donationsModel");

// Save Donation
const save_donation = function (req, res){
    let newdonation = new DonationsModel(req.body);

    newdonation.save((err)=>{
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

// GetAll Donation
const getAll_donations = function (req, res){
    DonationsModel.find().exec((err, exsitingDonations) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingDonations,
        });
      });
}

// Get Donation By ID
const get_donation = function (req, res){
    let donationID = req.params.id;

    DonationsModel.findById(donationID,(err,exsitingDonations)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingDonations
        });
    });
}

// Update Donation
const update_donation = function (req, res){
    DonationsModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, donation)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Donation
const delete_donation = function (req, res){
    DonationsModel.findByIdAndRemove(req.params.id).exec((err,deleteddonation)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deleteddonation
        });

    });
}

module.exports = {save_donation, getAll_donations, get_donation, update_donation, delete_donation};