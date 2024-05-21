const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
const messageRoute = require("./Routes/messageRoute")
const chatRoute = require('./Routes/chatRoute')

const app = express()
require('dotenv').config()


app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)
app.use("/api/messages", messageRoute)
app.use('/api/chats', chatRoute)

app.use(express.json())
app.use(cors())
app.use('/api/users', userRoute)



app.get('/', (req, res) => {
    res.send('Welcome our chat app api')
})

const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

app.listen(port, (req, res) => {
    console.log(`server running on port: ${port}`)
})

mongoose
    .connect(uri)
    .then(() => console.log('MongoDB connection established'))
    .catch((error) => console.log('MongoDB connection failed:', error.message))
