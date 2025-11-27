const colorInput = document.getElementById("color-input");
const textInput = document.getElementById("text-input");
const changeBgBtn = document.getElementById("change-bg-btn");
const updateTextBtn = document.getElementById("update-text-btn");
const targetDiv = document.getElementById("target-div");

changeBgBtn.addEventListener("click", () => {
    const color = colorInput.value.trim();
    const testDiv = document.createElement("div");
    testDiv.style.color = color;
    if (testDiv.style.color) {
        targetDiv.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});

updateTextBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if (text === "") {
        alert("Please enter some text!");
    } else {
        targetDiv.textContent = text;
    }
});
