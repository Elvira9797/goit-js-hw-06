const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", onDecrementButtonClick);
increment.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
