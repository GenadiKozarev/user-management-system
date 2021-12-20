const express = require('express')
const userControllers = require('../controllers/users.js')

const router = express.Router()

router.get('/users', userControllers.getUsers)
router.post('/user', userControllers.createUser)
router.get('/user/:id', userControllers.getUserById)
router.delete('/user/:id', userControllers.deleteUser)

module.exports = router