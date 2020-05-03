const Sequelize = require('sequelize');

const sequelize = require('../config/db');

const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  shop_name: {
    type: Sequelize.STRING,
  },
  role_name: {
    type: Sequelize.STRING,
  },
  phone_number: {
    type: Sequelize.NUMBER,
  }
});

module.exports = Role;