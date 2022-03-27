// 1 require express
const express = require ('express');
// 2 create instance
const app = express();

// 5 require dotenv
require('dotenv').config()
// 6 connectDB
const connectDB = require('./config/connectDB')
connectDB()
// 7 routes
app.use('/api/user', require("./routes/user"))
// 8 middleware route
app.use(express.json)

// 3 create port
const PORT = process.env.PORT
// 4 create server
app.listen(PORT , error => {
    error? console.log(error):console.log(`Server is running on port ${PORT}...`)
})