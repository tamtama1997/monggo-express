

module.exports =(app) =>{
    const posts = require('../controllers/post.controller')
    const router = require('express').Router()

    router.get('/', posts.findAll)
    router.post('/', posts.create)
    router.get('/:id', posts.findOne)
    router.put('/:id', posts.updateDataById)
    router.delete('/:id', posts.deleteDataById)
    app.use('/api/posts', router)
}