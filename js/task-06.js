const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  const inputValidationEl = event.currentTarget;

  if (inputValidationEl.value.length == inputValidationEl.dataset.length) {
    inputValidationEl.classList.remove("invalid");
    inputValidationEl.classList.add("valid");
  } else {
    inputValidationEl.classList.remove("valid");
    inputValidationEl.classList.add("invalid");
  }
}
