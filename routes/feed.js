const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// GET single post - /feed/post
router.get('/post/:id', feedController.getPost);

// POST single post - /feed/post
router.post('/post', [
    body('title').trim().isLength({ min: 5 }),
    body('text').trim().isLength({ min: 5 }),
], feedController.createPost);

module.exports = router;