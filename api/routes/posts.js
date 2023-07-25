const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/posts')
const checkPostSchema = require('../middlewares/checkPostSchema');


router.get('/', ctrl.getPosts)

router.get('/:id', ctrl.getPost)

router.get('/byUser/:id', ctrl.getPostsByUser)

router.post('/', ctrl.postPost,checkPostSchema)

router.patch('/:id', ctrl.patchPost)

router.delete('/:id', ctrl.deletePost)

module.exports = router
