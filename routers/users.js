const express = require('express')
const usersController = require('../controllers/users')
// const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/getAll', usersController.getAllUsers)

router.get('/getUser/:id', usersController.getUserById)

router.get('/getUser/:email', usersController.getUserByEmail)

router.get('/getUser/:location', usersController.getUserByLocation)

router.get('/getUser/:first_name', usersController.getUserByFirstName)

router.get('/getUser/:last_name', usersController.getUserByLastName)

router.post('/createUser', usersController.createUser)

router.put('/updateUser/:id', usersController.updateUserById)

router.delete('/deleteUser/:id', usersController.deleteUserById)

module.exports = router