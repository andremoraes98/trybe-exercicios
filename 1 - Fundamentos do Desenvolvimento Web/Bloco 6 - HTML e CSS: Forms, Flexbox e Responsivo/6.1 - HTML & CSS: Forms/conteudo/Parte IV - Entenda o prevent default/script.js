// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', nothingHappensLink);

function nothingHappensLink() {
  event.preventDefault();
}

INPUT_CHECKBOX.addEventListener('click', nothingHappensCheckbox);

function nothingHappensCheckbox() {
  event.preventDefault();
}