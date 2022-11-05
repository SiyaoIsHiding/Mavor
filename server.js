const fs = require("fs").promises
const express = require("express")
const path = require("path")

const app = express()
const port = 80

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/html/react.html'))
})

app.get('/posts', function (req, res) {
    res.sendFile(path.join(__dirname, '/data/posts.json'))
})

app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port)
console.log('Server started at http://localhost:' + port)


