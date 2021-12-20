const express = require('express')

const userControllers = require('../controllers/users.js')

const router = express.Router()

router.get('/users', userControllers.getUsers)

router.post('/user', userControllers.createUser)

module.exports = router