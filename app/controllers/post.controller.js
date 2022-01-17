const { mongoose } = require('../models')
const db= require('../models')

const Post = db.posts

exports.findAll = (req, res)=> {
    Post.find()
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error while get all data"
        })
    })
}

exports.findOne = (req, res)=> {
    const id=req.params.id;
    Post.findById(id)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error while get One Data By Id."
        })
    })
}

exports.updateDataById = (req, res)=> {
    const id=req.params.id;
    Post.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message: 'data not found'
            })
        }
        res.send('update was succesfull')
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error while update One Data By Id."
        })
    })
}

exports.deleteDataById = (req, res)=> {
    const id=req.params.id;
    Post.findByIdAndRemove(id, req.body)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message: 'data not found'
            })
        }
        res.send('delete was succesfull')
    }).catch((err)=>{
        res.status(500).send({
            message: err.message || "Some error while update One Data By Id."
        })
    })
}

exports.create= (req, res)=>{
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published? req.body.published: false
    })
    post.save(post)
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.status(409).send({
            message: err.message || "Error while create new data"
        })
    })
}