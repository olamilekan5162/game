const etch = document.querySelector(".etch");

for (let i = 0; i <= 249; i++) {
  const sketch = document.createElement("div");
  sketch.className = "sketch";
  etch.appendChild(sketch);
  sketch.addEventListener("draghover", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    sketch.style.background = `rgb(${r}, ${g}, ${b})`;
  });
}

const submit = document.querySelector(".userInput");
const input = document.querySelector("#size");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("you have to input something");
    return;
  }
  etch.innerHTML = "";

  for (let i = 0; i <= Number(input.value); i++) {
    const sketch = document.createElement("div");
    sketch.className = "sketch";
    etch.appendChild(sketch);

    sketch.addEventListener("dragover", () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      sketch.style.background = `rgb(${r}, ${g}, ${b})`;
    });
  }
});
