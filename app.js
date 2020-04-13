// External packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Local paths
const feedRoutes = require('./routes/feed');
const sequelize = require('./config/db');
// In order to create a table with the current model we need to import the model to the app.js file ¯\_(ツ)_/¯
// Just leaving the comment to create more tables later :)
// const Post = require('./models/post');
const app = express();

const PORT = 8080;

app.use(cors());


// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authentication');
    next();
})

app.use('/feed', feedRoutes);

sequelize
    .sync()
    .then(
        () => {
        console.log(`MySql connected... 🔥🔥🔥 on port ${PORT}`);
        app.listen(PORT);
    }).catch(
        err => { console.log('😞', err) }
    );

