const { validationResult } = require('express-validator');
const Post = require('../models/post');

// Create a single post
exports.createPost = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed, entered data is incorrect',
            errors: errors.array()
        });
    }

    Post.create({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        createdAt: new Date().toISOString(),
    })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        });
};

// Retrieve all posts
exports.getPosts = (req, res, next) => {
    Post.findAll()
    .then(posts => res.send(posts).status(201))
    .catch(err => console.log(err));
};

// Get single post
exports.getPost = (req, res, next) => {
    const postId = req.params.id;

    Post.findByPk(postId)
    .then(post => res.send(post).status(201))
    .catch(err => console.log(err));
};

// Update single post by id
exports.updatePost = (req, res, next) => {
    const postId = req.body.id;
    const updatedTitle = req.body.title;
    const updatedText = req.body.text;
    const updatedAuthor = req.body.author;

    Post.findByPk(postId)
        .then(post => {
            post.title = updatedTitle;
            post.text = updatedText;
            post.author = updatedAuthor;
            return post.save();
        })
        .then(result => res.status(201).send({ message: 'Post updated successfully', result}))
        .catch(err => console.log(err));
};

// Delete single post by id
exports.deletePost = (req, res, next) => {
    const postId = req.body.id;

    Post.findByPk(postId)
    .then(post => post.destroy())
    .then(result => res.send({ message: 'Post deleted successfully!' }))
    .catch(err => console.log(err));
};