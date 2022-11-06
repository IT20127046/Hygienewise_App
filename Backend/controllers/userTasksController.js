const UserTasksModel = require('../models/userTasksModel');

// Save record
const save_record = function (req, res){
    let newRecord = new UserTasksModel(req.body);

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

// GetAll Records
const getAll_records = function (req, res){
    UserTasksModel.find().exec((err, existingRecords) => {
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

// Get Record By ID
const get_record = function (req, res){
    let recordID = req.params.id;

    UserTasksModel.findById(recordID,(err,existingRecord)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingRecord
        });
    });
}

// Get Record by userID
const get_record_by_userID = function (req, res){
    let userID = req.params.id;

    UserTasksModel.findOne({userId:userID},(err,existingRecord)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingRecord,
        });
    }
    );
}

// Update Record
const update_record = function (req, res){
    UserTasksModel.findByIdAndUpdate(
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

// Delete Record
const delete_record = function (req, res){
    UserTasksModel.findByIdAndRemove(req.params.id).exec((err,deletedRecord)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedRecord
        });

    });
}

module.exports = { save_record, getAll_records, get_record, get_record_by_userID, update_record, delete_record };