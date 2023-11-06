const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const router = require('./src/book.route')

mongoose.connect('mongodb+srv://hsupare:2kZE1zdHBT5kzVVm@cluster0.5drhi.mongodb.net/himanshu-DB').then(() => {
    console.log("mongodb is connected")
}).catch((err) => {
    console.log(err)
})

app.use("/", router)

const PORT = 3000
app.listen(process.env.PORT || PORT, () => {
    console.log(`express app is running on ${process.env.PORT || PORT} `)
})