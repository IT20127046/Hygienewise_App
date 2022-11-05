const ComplaintModel = require("../models/complaintModel");

// Save Complaint
const save_complaint = function (req, res){
    let newSample = new ComplaintModel(req.body);

    newSample.save((err)=>{
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

// GetAll Complaint
const getAll_complaints = function (req, res){
    ComplaintModel.find().exec((err, exsitingComplaint) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingComplaint,
        });
      });
}

// Get Complaint By ID
const get_complaint = function (req, res){
    let sampleID = req.params.id;

    ComplaintModel.findById(sampleID,(err,exsitingComplaint)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingComplaint
        });
    });
}

// Update Complaint
const update_complaint = function (req, res){
    ComplaintModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, sample)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Complaint
const delete_complaint = function (req, res){
    ComplaintModel.findByIdAndRemove(req.params.id).exec((err,deletedComplaint)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedComplaint
        });

    });
}

module.exports = {save_complaint, getAll_complaints, get_complaint, update_complaint, delete_complaint};