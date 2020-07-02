const express = require('express')
const usersController = require('../controllers/users')
// const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/getAll', usersController.getAllUsers)

router.get('/getUser/:id', usersController.getUserById)

router.post('/createUser', usersController.createUser)

router.put('/updateUser/:id', usersController.updateUserById)

router.delete('/deleteUser/:first_name', usersController.deleteUserByFirstName)

module.exports = router