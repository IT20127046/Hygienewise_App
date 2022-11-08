const TaskModel = require('../models/taskModel');

// Save Task
const save_task = function (req, res){
    let newRecord = new TaskModel(req.body);

    newRecord.save((err, savedRecord)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            _id: savedRecord._id
        });
    });
}

// GetAll Tasks
const getAll_tasks = function (req, res){
    TaskModel.find().exec((err, existingRecords) => {
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

// Get Task By ID
const get_task = function (req, res){
    let recordID = req.params.id;

    TaskModel.findById(recordID,(err,existingRecord)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            existingRecord
        });
    });
}

// Update Task
const update_task = function (req, res){
    TaskModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, task)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Task
const delete_task = function (req, res){
    TaskModel.findByIdAndRemove(req.params.id).exec((err,deletedTask)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedTask
        });

    });
}

module.exports = { save_task, getAll_tasks, get_task, update_task, delete_task };