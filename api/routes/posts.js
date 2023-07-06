const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/posts')

router.get('/', ctrl.getPosts)

router.get('/:id', ctrl.getPost)

router.get('/byUser/:id', ctrl.getPostsByUser)

router.post('/', ctrl.postPost)

router.delete('/:id', ctrl.deletePost)

module.exports = router
