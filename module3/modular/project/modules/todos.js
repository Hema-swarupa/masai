import { displayTodos } from "./displayTodos.js";

let isLoggedIn = localStorage.getItem("isLoggedIn");

if (!isLoggedIn) {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function getTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();

    displayTodos(data.slice(0, 20));   // Display first 20 todos
}

getTodos();
