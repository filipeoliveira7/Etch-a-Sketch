const container = document.querySelector("#container");
let gridSize = 16;
let currentColor = "black";

function createGrid(size) {
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = currentColor;
    });
  }
}

createGrid(16);

const sizeButtons = document.querySelectorAll(".size");
sizeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sizeButtons.forEach((button) => {
      button.classList.remove("active-button");
    });
    button.classList.add("active-button");
    if (button.classList.contains("small")) {
      size = 16;
    } else if (button.classList.contains("medium")) {
      size = 32;
    } else {
      size = 64;
    }
    container.innerHTML = "";
    createGrid(size);
  });
});

function eraseGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.removeAttribute("style");
  });
}

const eraseButton = document.querySelector(".erase");
eraseButton.addEventListener("click", eraseGrid);

const modernButton = document.querySelector(".modern");
modernButton.addEventListener("click", () => {
  const colorPicker = document.createElement("input");
  colorPicker.type = "color";
  colorPicker.value = currentColor;
  colorPicker.addEventListener("input", (event) => {
    currentColor = event.target.value;
  });
  colorPicker.click();
});

const classicButton = document.querySelector(".classic");
classicButton.addEventListener("click", () => {
  currentColor = "black";
});
