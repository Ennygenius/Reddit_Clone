const express = require("express")
const routes = express.Router()
const {RegisterUser, loginUser} = require('../Controllers/usersControllers')



routes.post('/register', RegisterUser)

routes.post('/login', loginUser )


module.exports = routes