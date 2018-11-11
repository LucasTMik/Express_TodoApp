
$(document).ready(function () {
    reloadList()
    
    $('#addTodo').click(function () {
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
    })
})

function reloadList() {
    fetch('http://localhost:8000/homelist')
    .then(function(req) {
        req.json().then(function(data) {
            $('#list li').each(function () {
                this.remove()
            })
            $.each(data , function(key, element) {
                $('#list').append(`<li>${element}</li>`)
            })
        })
    })
}
