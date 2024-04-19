const express = require('express')

const app = express()

const port = 8000

app.get("/", (req, res) => {
    res.send("Hello Durgesh , How are you")
})

app.get("/home", (req, res) => {
    res.send("Welcome to my home page")
})

app.listen(port,() => {
    console.log(`Server is running at ${port}`)
})