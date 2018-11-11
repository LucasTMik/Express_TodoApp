const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')


var app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(__dirname+'/client'))

app.get('/homelist', (req, res) => {
    res.send(todoList)
});

app.get('/home', (req, res) => {
   render(res)
});

app.post('/addtd', (req, res) => {
    res.send('200')
    let val = req.body.todo
    if(val != null) 
        todoList.push(val)
});

todoList = ['blablablab','varias paradas','muito test', 'sei la mano']

var PORT = 8000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

let render = (res) => {
    res.sendFile(path.join(__dirname, '/client/page.html'))
}

