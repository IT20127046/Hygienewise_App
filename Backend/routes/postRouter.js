const express = require('express');
const PostRouter = express.Router();
const PostController = require('../controllers/postController');

// Save post
PostRouter.post('/post/add', PostController.save_post);

// GetAll post
PostRouter.get('/post/getAll', PostController.getAll_posts);

// Get post By ID
PostRouter.get('/post/get/:id', PostController.get_post);

// Update post
PostRouter.put('/post/update/:id', PostController.update_post);

// Delete post
PostRouter.delete('/post/delete/:id', PostController.delete_post);

module.exports = PostRouter;