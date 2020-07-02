const express = require('express')
const usersController = require('../controllers/users')
const { checkJwt } = require('../middleware')
const router = express.Router()

// router.get('/', usersController.getAllUsers)

router.get('/getUser/:id', usersController.getUserById)

router.post('/createUser', checkJwt, usersController.createUser)

router.put('/updateUser/:id', checkJwt, usersController.updateUserById)

router.delete('/deleteUser/:first_name', checkJwt, usersController.deleteUserByFirstName)

module.exports = router