//Assim que o documento estiver carregado 
//Executa a funçao
$(document).ready(function () {
    reloadList()
    
    //Adiciona um evento de click no botão de 
    //adicionar tarefas
    $('#addTodo').click(function () {
        addTodo()
    })
    //Adicionando evendo ao input, para quando
    // for precionado o enter chamar a funçao 
    // de adição
    $('#todo').keydown(function (event) {
        let keyCode = event.keyCode
        if(keyCode == '13')
            addTodo()
    })
})

//Comunicaçao com a Api por meio
// de fetch. 
function addTodo() {
    let todoInput = $('#todo')
    let todoVal = {
        todo: todoInput.val()
    }
    
    let fetchOptions = { 
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todoVal)
    }

    fetch('http://localhost:8000/addtd', fetchOptions)
    .then(function() {
        console.log("Click recorded");
        todoInput.val('')
        reloadList()
    })
}

//Destroi li's existentes e recria baseado
// na lista recebida pelo get feito com o fetch
function reloadList() {
    fetch('http://localhost:8000/homelist')
    .then(function(req) {
        req.json().then(function(data) {
            $('#list li').each(function () {
                this.remove()
            })
            $.each(data , function(key, element) {
                $('#list').append(`<li class="list-group-item">${element}</li>`)
            })
        })
    })
}
