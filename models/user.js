const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    door_bell_name: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    floor: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    post_code: Sequelize.NUMBER,
    phone_number: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
});

module.exports = User;