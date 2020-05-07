const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    door_bell_name: {
      type: Sequelize.STRING,
    },
    floor: {
      type: Sequelize.STRING,
    },
    post_code: Sequelize.STRING,
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

module.exports = User;