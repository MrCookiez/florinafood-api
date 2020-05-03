const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

// Create new user
router.post('/users', usersController.createUser);

// Retrieve all users
router.get('/users', feedController.getUsers);

// Retrieve single user
router.get('/user/:id', feedController.getUser);

// Update single user
router.post('/user/:id', feedController.updateUser);

// Delete single user
router.delete('/user/:id', feedController.deleteUser);

module.exports = router;