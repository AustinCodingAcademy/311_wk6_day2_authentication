const express = require('express')
const usersController = require('../controllers/users')
const {authenticate} = require('../middleware/index');
// esm vs cjs ^^
const router = express.Router()


router.get('/', authenticate, usersController.getAllUsers)

router.get('/:id', authenticate, usersController.getUserById)

router.get('/', authenticate, usersController.getAllUsers)

router.post('/', authenticate, usersController.createUser)

router.put('/:id', authenticate, usersController.updateUserById)

router.delete('/:first_name', usersController.deleteUserByFirstName)

module.exports = router