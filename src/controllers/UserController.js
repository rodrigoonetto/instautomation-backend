const bcrypt = require('bcrypt')
const User = require('../models/User')


module.exports = {
	async createUser(req, res) {
		try {
			const email = req.body.email
			const firstName = req.body.firstName
			const instagram = req.body.instagram
			const password = req.body.password
			
			const existentUser = await User.findOne({ email })

			if (!existentUser) {
				const hashPassword = await bcrypt.hash(password, 10)
				const userResponse = await User.create({
					email: email,
					firstName: firstName,
					instagram: instagram,
					password: hashPassword,
				})
				const user_id = (userResponse._id)
				
				return res.json({ user_id , firstName})
				

				
			} else {
				return res.status(400).json({
					message:
						'Email already exists. Do you want to login instead?',
				})
			}
		} catch (err) {
				throw Error(`Error while Registering new user :  ${err}`)
		}
		
	},

	async getUserById(req, res) {
		const { userId } = req.params

		try {
			const user = await User.findById(userId)
			return res.json(user)
		} catch (error) {
			return res.status(400).json({
				message:
					'User ID does not exist, do you want to register instead?',
			})
		}
	},

	async modifyUser(req, res) {
		const { userId } = req.params
		const firstName = req.body.firstName
		const instagram = req.body.instagram
		const usersLimit = req.body.usersLimit
		const delay = req.body.delayInSeconds	
		const startingFrom = req.body.startingFrom
		const password = req.body.password
		const hashPassword = await bcrypt.hash(password, 10)
		
		try {
				const userResponse = await User.findByIdAndUpdate(userId,{
					firstName: firstName,
					instagram: instagram,
					usersLimit: usersLimit,
					delay: delay,
					startingFrom: startingFrom
				})
				if(password!=""){
				const pwdResponse = await User.findByIdAndUpdate(userId,{
					password: hashPassword
				})}
				
				return res.json({ "message":"Updated succesfully!"})
		} catch(err) {
				throw Error(`Error while updating data  ${err}`)
		}
	}
	


	
}
