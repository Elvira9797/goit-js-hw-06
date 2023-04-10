const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  const inputValidationEl = event.currentTarget;

  if (
    inputValidationEl.value.length === Number(inputValidationEl.dataset.length)
  ) {
    addOrRemoveClass("invalid", "valid");
  } else {
    addOrRemoveClass("valid", "invalid");
  }
}

function addOrRemoveClass(a, b, inputValidationEl) {
  validationInput.classList.remove(a);
  validationInput.classList.add(b);
}
