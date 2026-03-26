const etch = document.querySelector(".etch");
const submit = document.querySelector(".userInput");
const input = document.querySelector("#size");

function createGrid(size) {
  etch.innerHTML = "";

  etch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  etch.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const sketch = document.createElement("div");
    sketch.className = "sketch";
    etch.appendChild(sketch);

    sketch.addEventListener("mouseover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      sketch.style.background = `rgb(${r}, ${g}, ${b})`;
    });
  }
}

createGrid(16);

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("You have to input a number");
    return;
  }

  let size = Number(input.value);

  if (isNaN(size) || size <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  if (size > 100) {
    size = 100;
    alert("Size capped at 100x100");
  }

  createGrid(size);
});
