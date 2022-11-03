const PostModal = require("../models/postModal");

// Save Post
const save_post = function (req, res){
    let newpost = new PostModal(req.body);

    newpost.save((err)=>{
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

// GetAll Posts
const getAll_posts = function (req, res){
    PostModal.find().exec((err, exsitingpost) => {
        if (err) {
          return res.status(400).json({
            error: err,
          });
        }
        return res.status(200).json({
          success: true,
          exsitingpost,
        });
      });
}

// Get Post By ID
const get_post = function (req, res){
    let postID = req.params.id;

    PostModal.findById(postID,(err,exsitingpost)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            exsitingpost
        });
    });
}

// Update Post
const update_post = function (req, res){
    PostModal.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:true
            });
        }
    );
}

// Delete Post
const delete_post = function (req, res){
    PostModal.findByIdAndRemove(req.params.id).exec((err,deletedpost)=>{
        if(err) {
            return res.status(400).json({error:err});
        }
        return res.json({
            success:true,
            deletedpost
        });

    });
}

module.exports = {save_post, getAll_posts, get_post, update_post, delete_post};