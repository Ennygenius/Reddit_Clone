const mongoose = require("mongoose")
const Post = require("../Models/postModels")

const getAllPosts = async (req, res) =>{
    try {
        const post = await Post.find({}).populate( {path: 'category', select:'name', });
        res.json({post})
    } catch (error) {
        console.log(error);
    }
}


const getSinglePost = async (req, res) =>{
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.json({msg:`No post available with the id of ${req.params.id}`})
    }else{
        res.json({post})
    }
    
}


const createPost = async (req, res) =>{
    const {title, body, author,votes,category} = req.body;
    const post = await Post.create({
        title,
        body,
        author,
        votes,
        category,
    })
    try {
        const SavePost = post.save()
        res.json({Message:"Post Created Successfully"})
    } catch (err) {
        console.log(err);
    }
    
}


const updatePost = async (req, res) =>{
    const {title, body,votes} = req.body;
    const post = await Post.findByIdAndUpdate(req.params.id, {
        title,
        body,
        votes,
    });

    if (!post) {
        res.json({msg:`No post available with the id of ${req.params.id}`});
    }
    else{
        res.json({post})
    }
}

const deletePost = async (req, res) =>{
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            res.json({msg:`No post available with the id of ${req.params.id}`})
        }else{
            res.json({post})
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getAllPosts, getSinglePost, createPost, updatePost,deletePost}