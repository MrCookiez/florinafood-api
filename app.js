// External packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Local paths
const feedRoutes = require('./routes/feed');
const usersRoutes = require('./routes/user');
// Database config
const sequelize = require('./config/db');
// Environment config
const PORT = require('./env').PORT;
// In order to create a table with the current model we need to import the model to the app.js file ¯\_(ツ)_/¯
// Just leaving the comment to create more tables later :)
const Post = require('./models/post');
const User = require('./models/user');
const Role = require('./models/role');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to default server response!" });
});

// app.use('/users', usersRoutes);
app.use('/feed', feedRoutes);

// Define model/tables
Role.belongsToMany(User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

User.belongsToMany(Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

const ROLES = ["admin", "owner", "employee", "customer"];

sequelize
    .sync({ force: true})
    .then(
        () => {
        console.log(`MySql connected... 🔥🔥🔥 on port ${PORT}`);
        initial();
        app.listen(PORT);
    }).catch(
        err => { console.log('😞', err) }
    );
