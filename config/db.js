const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'nodemysql',
    'root',
    'test',
    {
        dialect: 'mysql',
        host: 'localhost'
    }
);

module.exports = sequelize;
