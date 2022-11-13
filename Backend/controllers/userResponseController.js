const UserResponseModel = require("../models/userResponseModel");

// Save Sample
const save_userResponse = function (req, res){
    let newResponse = new UserResponseModel(req.body);

    newResponse.save((err)=>{
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

// GetAll Sample
const getAll_userResponses = function (req, res){
    UserResponseModel.find().exec((err, exsitingUserResponses) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingUserResponses,
        });
      });
}

// Get Sample By ID
const get_userResponse = function (req, res){
    let sampleID = req.params.id;

    UserResponseModel.find({ complaintID: sampleID },(err,exsitingUserResponse)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingUserResponse
        });
    });
}

// Update Sample
const update_userResponse = function (req, res){
    UserResponseModel.findByIdAndUpdate(
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

// Delete Sample
const delete_userResponse = function (req, res){
    UserResponseModel.findByIdAndRemove(req.params.id).exec((err,deletedUserResponse)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedUserResponse
        });

    });
}

module.exports = {save_userResponse, getAll_userResponses, get_userResponse, update_userResponse, delete_userResponse};