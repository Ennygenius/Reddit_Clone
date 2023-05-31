const express = require("express")
const routes = express.Router()
const {getAllPosts, getSinglePost, createPost, updatePost,deletePost} = require("../Controllers/postControllers")


//get all post
routes.get('/', getAllPosts)

//get single post
routes.get('/:id', getSinglePost)

//create a post
routes.post('/', createPost)

//update a post
routes.patch('/:id', updatePost)

//delete a comment
routes.delete('/:id', deletePost)




module.exports = routes