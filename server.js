const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')

//Estanciando o express e criando o app
var app = express()

//Liberando acesso com o cors()
app.use(cors())
//Adicionando middleware para tratar as requisiçoes
app.use(bodyParser.json())

//Definindo o diretorio padrao
app.use(express.static(__dirname+'/client'))

//Recebendo um get na rota /homelist responde com a lista
app.get('/homelist', (req, res) => {
    res.send(todoList)
});

//Recebendo get na home envia o html do client
app.get('/home', (req, res) => {
   res.sendFile(path.join(__dirname, '/client/page.html'))
});

let todoList = []

//Post na rota /addtd
app.post('/addtd', (req, res) => {
    //Envia sinal de OK
    res.send('200')
    let val = req.body.todo
    //Sendo não nulo o retorno do client, adiciona a lista
    if(val != null) 
        todoList.push(val)
});


//Porta na qual irá esperar por métodos
var PORT = 8000
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

