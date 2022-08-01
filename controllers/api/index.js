const router = require('express').Router()

const postRoutes = require('./post-routes')

router.use('/dish', postRoutes)

module.exports = router
