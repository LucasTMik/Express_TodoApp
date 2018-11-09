const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname+'/client'));


app.get('/home', (req, res) => {
   render(res);
});

app.post('/addtd', (req,res) => {
    res.send('200');
    let post = req.headers.newtodo;
    if(post != '') 
        todoList.push(post);
    console.log(todoList);
});

todoList = [];

var PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

let render = (res) => {
    res.sendFile(path.join(__dirname, '/client/page.html'));
}

