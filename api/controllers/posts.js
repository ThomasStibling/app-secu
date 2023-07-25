const Post = require('../models/Post')
const checkPostSchema = require('../middlewares/checkPostSchema')

const getPosts = (req, res)=> {
  Post.find().then((posts)=>{
    res.status(200).json(posts)
  }).catch(error => res.status(400).json({ error }))
}

const getPostsByUser = (req, res)=> {
  Post.find({
    $where: this.postedBy == req.params.userId
  }).then((posts)=>{
    res.status(200).json(posts)
  }).catch(error => res.status(400).json({ error }))
}

const getPost = (req, res)=> {
  const id = req.params.id
  Post.findOne({
    _id: id
  }).then((post)=>{
    res.status(200).json(post)
  }).catch(error => res.status(400).json({ error }))
}

const patchPost = (req, res)=> {
  const id = req.params.id
  const updatePost = req.body
  Post.updateOne({
    _id: id
  }, {
    ...updatePost
  }).then((post)=>{
    res.status(201).json(post)
  }).catch(error => res.status(400).json({ error }))
}

const postPost = (req, res)=> {
  const newPost = req.body
  const post = new Post({ ...newPost })
  post.save().then(()=> {
    res.status(201).json(post)
  }).catch(error => res.status(400).json({ error }))
}

const deletePost = (req, res)=> {
  const id = req.params.id
  Post.deleteOne({
    _id: id
  }).then(()=>{
    res.sendStatus(204)
  }).catch(error => res.status(400).json({ error }))
}

module.exports = { getPosts, getPost,getPostsByUser, patchPost, postPost, deletePost }