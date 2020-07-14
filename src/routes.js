
const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const LoginController = require('./controllers/LoginController')

routes.get('/', function (req, res) {
    res.send('Hello World')
  })

//Login
routes.post('/login', LoginController.login)

//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)
routes.post('/user/modify/:userId', UserController.modifyUser)


module.exports = routes