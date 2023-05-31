const express = require("express")
const routes = express.Router()
const {getAllComments, getSingleComment, createComment, updateComment,deleteComment} = require("../Controllers/commentControllers")


//get all Comments
routes.get('/', getAllComments)

//get single Comment
routes.get('/:id', getSingleComment)

//Create a Comment
routes.post('/', createComment)

//update a Comment
routes.patch('/:id', updateComment)

//delete a comment
routes.delete('/:id', deleteComment)




module.exports = routes