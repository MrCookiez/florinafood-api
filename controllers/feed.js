const { validationResult } = require('express-validator');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                id: '1',
                title: 'title',
                author: 'Theodoros Vragkos',
                content: {
                    text: 'first post - Lorem ipsum dolor amet',
                    image: 'https://i.picsum.photos/id/13/200/300.jpg',
                    links: {
                        source: 'http://teovragkos.com'
                    },
                },
            },
            {
                id: '2',
                title: 'Header 2',
                author: 'Theodoros Vragkos',
                content: {
                    text: 'first post - Lorem ipsum dolor amet',
                    image: 'https://i.picsum.photos/id/13/200/300.jpg',
                    links: {
                        source: 'http://teovragkos.com'
                    },
                },
            }
        ]
    });
};

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Validation failed, entered data is incorrect',
            errors: errors.array()
        });
    }

    const title = req.body.title;
    const text = req.body.text;
    const author = req.body.author;

    // Create post in db
    res.status(201).json({
        message: 'Post was created!',
        post: {
            id: new Date().toISOString(),
            title: title,
            text: text,
            author: author
        }
    });
};