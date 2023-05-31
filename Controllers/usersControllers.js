const express = require("express")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const Users = require('../Models/userModels')


const RegisterUser = async(req, res)=>{
    const {username, password} = req.body
    const user = await Users.findOne({username})
    if(user){
        return res.json({mgs:"User already Exist"})
    }
    const hPassword = await bcrypt.hash(password, 10)
    const nwUser = new Users({username,password:hPassword})
    await nwUser.save()
    res.json({mgs:"User Created Successfully"})
} 

const loginUser = async(req, res)=>{
    const {username, password} = req.body
    const user = await Users.findOne({username})
    if(!user){
        return res.json({mgs:"User does'nt Exist"})

    }
    const isPValid = await bcrypt.compare(password, user.password)
    if(!isPValid){
        return res.json({mgs:"Username or password incorrect"})
    }
    const token = jwt.sign({id:user._id},"secret")
        res.json({token, userID:user._id})
}

module.exports = {RegisterUser, loginUser}