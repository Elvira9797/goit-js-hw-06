let boxes = document.querySelector("#boxes");
const inputNumber = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", onCreateButtonClick);
destroyButton.addEventListener("click", onDestroyButtonClick);

function onCreateButtonClick() {
  createBoxes(inputNumber.value);
}

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    const div = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    markup += div;
  }
  boxes.insertAdjacentHTML("afterbegin", markup);
}

function onDestroyButtonClick() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
