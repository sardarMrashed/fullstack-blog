const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  const posts = await Post.find()
  res.json(posts)
})

router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  await post.save()
  res.json(post)
})

router.delete('/:id', async (req, res) => {
  await Post.findByIdAndDelete(req.params.id)
  res.json({ message: 'Post deleted' })
})

// Update a post
router.put('/:id', async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, content: req.body.content },
    { new: true }
  )
  res.json(post)
})

module.exports = router