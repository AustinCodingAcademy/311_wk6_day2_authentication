const express = require('express')
const authController = require('../controllers/auth')
const router = express.Router()

// router.post('/signup', authController.signup)

router.post('/login-with-auth', authController.login)
router.post('/signin-manual', authController.signin)

module.exports = router