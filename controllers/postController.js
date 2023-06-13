const db = require('../models/index')

const Post = db.posts

// add a product
const addPost = async (req, res) => {
    let info = {
        content: req.body.content,
        likeCount: req.body.likeCount,
        likedBy: req.body.likedBy,
        dislikedBy: req.body.dislikedBy,
        username: req.body.username,
    }

    const post = await Post.create(info)
    res.status(200).send(post)
}

// get all products
const getAllPosts = async (req, res) => {
    let posts = await Post.findAll({})
    if(!posts.length) 
        res.json({ message: 'No posts found!' })
    else
        res.status(200).send(posts)
}

// get single product
const getPost = async (req, res) => {
    let id = req.params.id
    let post = await Post.findOne({ where: {id: id} })
    res.status(200).send(post)
}

// update a product
const updatePost = async (req, res) => {
    let id = req.params.id
    let p = await Post.update(req.body, { where: {id: id} })
    if(p) res.status(200).send(p)
}

// delete a product
const deletePost = async (req, res) => {
    let id = req.params.id
    await Post.destroy({ where: {id: id} })
    res.status(200).send({ message: 'Product is deleted' })
}

module.exports = {
    addPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}
