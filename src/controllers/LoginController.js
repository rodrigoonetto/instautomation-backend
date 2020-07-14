const bcrypt = require('bcrypt')
const User = require('../models/User')


module.exports = {
	async login(req, res) {
		try {
			const { email, password } = req.body

			if (!email || !password) {
				return res.status(200).json({ message: 'Required field missing!' })
			}

			const user = await User.findOne({ email })

			if (!user) {
				return res.status(200).json({ message: 'User not found! Do you want to register instead?' })
			}
			

			if (user && await bcrypt.compare(password, user.password)) {
				const userResponse = {
					_id: user._id,
					email: user.email,
				}

				
				return res.json({
					user_id: userResponse._id,
					user_name: userResponse.firstName
				})
				

			} else {
				return res.status(200).json({ message: 'Email or Password does not match!' })
			}


		} catch (error) {
			throw Error(`Error while Authenticating a User ${error}`)
		}
	}
}