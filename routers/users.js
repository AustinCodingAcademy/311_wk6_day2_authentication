const express = require('express')
const usersController = require('../controllers/users')
// const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/getAll', usersController.getAllUsers)

router.get('/getUser/:id', usersController.getUserById)

router.get('/getUserByEmail/:email', usersController.getUserByEmail)

router.get('/getUserByLocation/:location', usersController.getUserByLocation)

router.get('/getUserByFirst_name/:first_name', usersController.getUserByFirstName)

router.get('/getUserByLast_name/:last_name', usersController.getUserByLastName)

router.post('/createUser', usersController.createUser)

router.put('/updateUser/:id', usersController.updateUserById)

router.delete('/deleteUser/:id', usersController.deleteUserById)

module.exports = router