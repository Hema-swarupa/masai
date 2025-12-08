

async function fetchTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    let first20 = data.slice(0, 20);

  
    localStorage.setItem("todos", JSON.stringify(first20));
}

function getStoredTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
}


function renderTodos() {
    let todos = getStoredTodos();
    let container = document.getElementById("todo-container");
    container.innerHTML = ""; 

    todos.forEach((todo) => {
        let card = document.createElement("div");
        card.style.border = "1px solid black";
        card.style.padding = "10px";
        card.style.margin = "10px 0";

        let title = document.createElement("p");
        title.textContent = todo.title;

        let status = document.createElement("p");
        status.textContent = "Completed: " + todo.completed;

        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function () {
            deleteTodo(todo.id);
        });

        card.appendChild(title);
        card.appendChild(status);
        card.appendChild(btn);

        container.appendChild(card);
    });
}

function deleteTodo(id) {
    let todos = getStoredTodos();
    let updated = todos.filter(todo => todo.id !== id);

    localStorage.setItem("todos", JSON.stringify(updated));
    renderTodos();
}


async function init() {
    if (!localStorage.getItem("todos")) {
        await fetchTodos();
    }
    renderTodos();
}

init();
