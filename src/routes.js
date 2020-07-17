
const express = require('express')
const routes = express.Router()

const UserController = require('./controllers/UserController')
const LoginController = require('./controllers/LoginController')

routes.get('/test', function (req, res) {
    res.send('Server up and running')
  })

//Login
routes.post('/login', LoginController.login)

//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)
routes.post('/user/modify/:userId', UserController.modifyUser)
routes.post('/user/addexception/:userId', UserController.addUnfollowException)
routes.post('/user/deleteexception/:userId', UserController.deleteUnfollowException)


module.exports = routes