const ChallengeModel = require('../models/challengeModel');

// Save Challenge
const save_challenge = function (req, res){
    let newRecord = new ChallengeModel(req.body);

    newRecord.save((err)=>{
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

// GetAll Challenges
const getAll_challenges = function (req, res){
    ChallengeModel.find().exec((err, existingRecords) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          existingRecords,
        });
      });
}

// Get Challenge By ID
const get_challenge = function (req, res){
    let recordID = req.params.id;

    ChallengeModel.findById(recordID,(err,existingRecord)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingRecord
        });
    });
}

// Update Challenge
const update_challenge = function (req, res){
    ChallengeModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, challenge)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Challenge
const delete_challenge = function (req, res){
    ChallengeModel.findByIdAndRemove(req.params.id).exec((err,deletedChallenge)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedChallenge
        });

    });
}

module.exports = { save_challenge, getAll_challenges, get_challenge, update_challenge, delete_challenge };