const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    body:{
        type: String,
        required: [true, "The Body field is required"]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
},{timestamps: true})

module.exports = mongoose.model("comment",commentSchema)