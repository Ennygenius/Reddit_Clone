const mongoose = require("mongoose")
const Comment = require("../Models/commentModels")

const getAllComments = async (req, res) =>{
    try {
        const comment = await Comment.find({})
        res.json({comment})
    } catch (error) {
        console.log(error);
    }
}


const getSingleComment = async (req, res) =>{
    const comment = await Comment.findById(req.params.id)
    if (!comment) {
        res.json({msg:`No comment available with the id of ${req.params.id}`})
    }else{
        res.json({comment})
    }
    
}


const createComment = async (req, res) =>{
    const {body, author} = req.body;
    const comment = await Comment.create({
        body,
        author,
    })
    try {
        const SaveComment = comment.save()
        res.json({Message:"comment Created Successfully"})
    } catch (err) {
        console.log(err);
    }
    
}


const updateComment = async (req, res) =>{
    const {body,author} = req.body;
    const comment = await Comment.findByIdAndUpdate(req.params.id, {
        body,
        author
    });

    if (!comment) {
        res.json({msg:`No comment available with the id of ${req.params.id}`});
    }
    else{
        res.json({comment})
    }
}

const deleteComment = async (req, res) =>{
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id)
        if (!comment) {
            res.json({msg:`No comment available with the id of ${req.params.id}`})
        }else{
            res.json({comment})
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getAllComments, getSingleComment, createComment, updateComment,deleteComment}