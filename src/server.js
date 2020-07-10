const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()


 

 



try {
	mongoose.connect(process.env.MONGO_DB_SECRET, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}
app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(port)
