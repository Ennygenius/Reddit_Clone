const mongoose = require("mongoose")
require('dotenv').config()
const URI = process.env.URL;

const connectDb = async (req, res) =>{
    try {
        const connect = await mongoose.connect(URI) 
        console.log("DataBase connected successfully");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDb