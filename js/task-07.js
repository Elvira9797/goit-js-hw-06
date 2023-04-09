const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = `${Number(fontSizeControl.value)}px`;

fontSizeControl.addEventListener("input", onFontsizeControlerInput);

function onFontsizeControlerInput(event) {
  text.style.fontSize = `${Number(event.currentTarget.value)}px`;
}
