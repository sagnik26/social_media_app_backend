const postController = require('../controllers/postController')

const router = require('express').Router()

router.post('/addPost', postController.addPost)

router.get('/allPosts', postController.getAllPosts)

router.get('/:id', postController.getPost)

router.put('/:id', postController.updatePost)

router.delete('/:id', postController.deletePost)

module.exports = router

