const express = require('express');
const usersController = require('../controllers/users');
const router = express.Router();
const { authenticate } = require('../middleware/index');

router.get('/', usersController.getAllUsers);

router.get('/:id', usersController.getUserById);

router.post('/', authenticate, usersController.createUser);

router.put('/:id', usersController.updateUserById);

router.delete('/:first_name', usersController.deleteUserByFirstName);

module.exports = router;
