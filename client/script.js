
window.onload = () => {
    let addBtn = document.getElementById("addTodo");
    let todo = document.getElementById("todo");
    let list = document.getElementById("list");

    addBtn.onclick = () => {

        let fetchOptions = { 
            method: 'POST',
            headers: {
                newtodo: todo.value
            }
        }

        fetch('http://localhost:8000/addtd', fetchOptions)
        .then(res => {
            console.log("Click recorded");
            if(todo.value != "") {
                li = document.createElement('li');
                li.innerHTML = todo.value;
                list.appendChild(li);
                todo.value = "";
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
}



