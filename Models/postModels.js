const mongoose = require("mongoose")
const categories = require("../Models/catModels")

const PostSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required: [true, "The title field is required"]
    },
    category:[{type: categories.schema}],
    body:{
        type: String,
        required: [true, "The Body field is required"]
    },
    author:{
        
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    
    votes:{
        type: Number,
        required: [true, "The Votes field is required"]
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true})

module.exports = mongoose.model("posts",PostSchema)