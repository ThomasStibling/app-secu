const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/users')

router.get('/', ctrl.getAllUser)

router.get('/:id', ctrl.getUser)

router.post('/create', ctrl.createUser)

router.post('/login', ctrl.loginUser)

router.delete('/', ctrl.deleteUser)

module.exports = router
