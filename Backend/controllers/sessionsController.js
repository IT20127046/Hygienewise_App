
const SessionModel = require("../models/sessionsModel");

// Save Session
const save_session = function (req, res){
    let newsession = new SessionModel(req.body);

    newsession.save((err)=>{
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

// GetAll Session
const getAll_session = function (req, res){
    SessionModel.find().exec((err, exsitingSession) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingSession,
        });
      });
}

// Get Session By ID
const get_session = function (req, res){
    let sessionID = req.params.id;

    SessionModel.findById(sessionID,(err,exsitingSession)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingSession
        });
    });
}

// Update Session
const update_session = function (req, res){
    SessionModel.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, session)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Session
const delete_session = function (req, res){
    SessionModel.findByIdAndRemove(req.params.id).exec((err,deletedsession)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedsession
        });

    });
}

module.exports = {save_session, getAll_session, get_session, update_session, delete_session};