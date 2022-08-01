const router = require('express').Router()
const Post = require('../../models/Post')

router.post('/', async (req, res) => {
  try {
    const postData = await Post.create({
      post_subject: req.body.post_subject,
      post_author: req.body.post_author,
      post_entry: req.body.post_entry
    })
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const post = await Post.update(
      {
        post_subject: req.body.post_subject,
        post_author: req.body.post_author,
        post_entry: req.body.post_entry
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.status(200).json(dish)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
