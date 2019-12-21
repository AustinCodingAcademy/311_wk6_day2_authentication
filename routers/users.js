const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const { authenticate } = require('../middleware')
//Import `{ authenticate }` into the users router and add it as middleware on all of the users routes.

router.get('/', authenticate, usersController.getAllUsers)

router.get('/:id', authenticate, usersController.getUserById)

router.post('/', authenticate, usersController.createUser)

router.put('/:id', authenticate, usersController.updateUserById)

router.delete('/:first_name', authenticate, usersController.deleteUserByFirstName)

module.exports = router