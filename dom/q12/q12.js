const ul = document.querySelector("ul");
const button = document.getElementById("add-btn");

button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    ul.appendChild(newItem);

    const lis = ul.querySelectorAll("li");
    lis.forEach((li, index) => {
        if ((index + 1) % 2 === 1) {
            li.style.fontWeight = "bold";
            li.style.color = "blue";
            li.style.fontStyle = "normal";
        } else {
            li.style.fontStyle = "italic";
            li.style.color = "red";
            li.style.fontWeight = "normal";
        }
    });
});
