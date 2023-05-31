const mongoose = require("mongoose")
const Category = require("../Models/catModels")

const getAllCategories = async (req, res) =>{
    try {
        const category = await Category.find({})
        res.json({category})
    } catch (error) {
        console.log(error);
    }
}


const getSingleCategories = async (req, res) =>{
    const category = await Category.findById(req.params.id)
    if (!category) {
        res.json({msg:`No category available with the id of ${req.params.id}`})
    }else{
        res.json({category})
    }
    
}


const createCategories = async (req, res) =>{
    const {name} = req.body;
    const category = await Category.create({
        name
    })
    try {
        const SaveCategory = category.save()
        res.json({Message:"category Created Successfully"})
    } catch (err) {
        console.log(err);
    }
    
}


const updateCategories = async (req, res) =>{
    const {name} = req.body;
    const category = await Category.findByIdAndUpdate(req.params.id, {
       name
    })
    if (!category) {
        res.json({msg:`No category available with the id of ${req.params.id}`})
    }else{
        res.json({category})
    }
}
    

const deleteCategories = async (req, res) =>{
    try {
        const category = await Category.findByIdAndDelete(req.params.id)
        if (!category) {
            res.json({msg:`No Category available with the id of ${req.params.id}`})
        }else{
            res.json({category})
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {getAllCategories, getSingleCategories, createCategories, updateCategories,deleteCategories}