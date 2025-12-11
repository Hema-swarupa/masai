const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let user = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    window.location.href = "login.html";
});
