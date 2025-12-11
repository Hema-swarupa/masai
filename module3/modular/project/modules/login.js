const form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        alert("No user found. Please signup first.");
        return;
    }

    if (
        storedUser.email === form.email.value &&
        storedUser.password === form.password.value
    ) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login Successful!");
        window.location.href = "todos.html";
    } else {
        alert("Incorrect credentials!");
    }
});
