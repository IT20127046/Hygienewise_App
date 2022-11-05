const TasksModel = require('../models/tasksModel');

// Save record
const save_record = function (req, res){
    let newRecord = new TasksModel(req.body);

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
    TasksModel.find().exec((err, existingRecords) => {
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

    TasksModel.findById(recordID,(err,existingRecord)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingRecord
        });
    });
}

// Update Record
const update_record = function (req, res){
    TasksModel.findByIdAndUpdate(
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
    TasksModel.findByIdAndRemove(req.params.id).exec((err,deletedSample)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedSample
        });

    });
}

module.exports = { save_record, getAll_records, get_record, update_record, delete_record };