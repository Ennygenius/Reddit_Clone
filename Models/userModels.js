const mongoose = require("mongoose")


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required: [true, "The username field is required"]
    },
    password: {
        type: String,required:true
    },
},{timestamps: true})

module.exports = mongoose.model("users",UserSchema)