const express = require("express")
const routes = express.Router()
const {getAllCategories, getSingleCategories, createCategories, updateCategories,deleteCategories}= require("../Controllers/catControllers")


//get all category
routes.get('/', getAllCategories)

//get single category
routes.get('/:id', getSingleCategories)

//create a category
routes.post('/', createCategories)

//update a category
routes.patch('/:id', updateCategories)

//delete a category
routes.delete('/:id', deleteCategories)




module.exports = routes