const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// Create a post - /feed/post
router.post('/post', [
    body('title').trim().isLength({ min: 5 }),
    body('text').trim().isLength({ min: 5 }),
], feedController.createPost);

// Retrieve all posts
router.get('/posts', feedController.getPosts);

// Retrieve single post
router.get('/post/:id', feedController.getPost);

// Update single post
router.post('/post/:id', feedController.updatePost);

// Delete single post
router.delete('/post/:id', feedController.deletePost);

module.exports = router;