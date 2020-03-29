exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'title', content: 'first post' }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    // Create post in db
   res.status(201).json({
       message: 'Post was created!',
       post: {
           id: new Date().toISOString(), title: title, content: content }
   });
};