// External packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Local paths
const feedRoutes = require('./routes/feed');
const usersRoutes = require('./routes/users');
// Database config
const sequelize = require('./config/db');
// In order to create a table with the current model we need to import the model to the app.js file ¯\_(ツ)_/¯
// Just leaving the comment to create more tables later :)
const Post = require('./models/post');
const User = require('./models/user');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRoutes);
app.use('/feed', feedRoutes);

const PORT = 8080;

sequelize
    .sync()
    .then(
        () => {
        console.log(`MySql connected... 🔥🔥🔥 on port ${PORT}`);
        app.listen(PORT);
    }).catch(
        err => { console.log('😞', err) }
    );
