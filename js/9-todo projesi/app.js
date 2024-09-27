const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const secondCardTitle = document.querySelectorAll(".card-title")[1];
const clearButton = document.querySelector("#clearButton");
const todoListForm = document.querySelector("#todoListForm");
let todos = [];

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", pageLoaded);
    secondCardBody.addEventListener("click", removeTodo);
    clearButton.addEventListener("click", clearAllTodos);
}

function pageLoaded() {
    checkTodosFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    console.log("submit eventi çalıştı");
    const inputText = addInput.value.trim();
    if (inputText == null || inputText == "") {
        showAlert("", "warning", "lutfen bos gecme abi");
    } else {
        addTodoToUI(inputText);
        addTodoToStorage(inputText);
        showAlert("", "success", "basariyla eklendi");
    }
    e.preventDefault();
}

function addTodoToUI(newTodo) {
    // <li class="list-group-item d-flex justify-content-between">Todo 1
    //     <a href="#" class="delete-item">
    //         <i class="fa fa-remove"></i>
    //     </a>
    // </li>

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

function addTodoToStorage(newTodo) {
    checkTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(tur, type, message) {
    const div = document.createElement("div");
    // div.className = "alert alert-" + type;
    div.className = `alert alert-${type}`;
    div.textContent = message;
    if (tur === "sil") {
        todoListForm.appendChild(div);
    } else {
        firstCardBody.appendChild(div);
    }

    setTimeout(function () {
        div.remove();
    }, 2500);
}

function removeTodo(e) {
    if (e.target.className == "fa fa-remove") {
        const todo = e.target.parentElement.parentElement;
        removeTodoFromUI(todo);
        removeTodoFromStorage(todo.textContent);
        showAlert("sil", "success", "basariyla silindi guzum");
    }
}

function removeTodoFromUI(todo) {
    todo.remove();
}

function removeTodoFromStorage(removeTodo) {
    checkTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (removeTodo === todo) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function clearAllTodos() {
    const todoList = document.querySelectorAll(".list-group-item");
    if (todoList.length > 0) {
        todoList.forEach(function (todo) {
            todo.remove();
        });
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        showAlert("", "success", "basariyla hepiceezi silindi");
    } else {
        showAlert("sil", "warning", "zati boş da");
    }
}
