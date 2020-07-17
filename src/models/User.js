const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	firstName: String,
	instagram: String,
	password: String,
	email: String,
	usersLimit: Number,
	delay: Number,	
	startingFrom: Number,
	unfollowExceptions: [{ user: 'string', date: 'number' }]
})

module.exports = mongoose.model('User', UserSchema)
