const { validationResult } = require('express-validator');
const Post = require('../models/post');

exports.getPost = (req, res, next) => {
    const postId = req.params.id;

    Post.findByPk(postId)
    .then(post => res.send(post).status(201))
    .catch(err => console.log(err));
};

exports.getPosts = (req, res, next) => {
    Post.findAll()
    .then(posts => res.send(posts).status(201))
    .catch(err => console.log(err));
};

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
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};