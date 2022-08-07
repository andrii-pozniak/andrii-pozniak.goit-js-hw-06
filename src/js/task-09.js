const btn = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);

btn.addEventListener(`click`, getRandomHexColor);

function getRandomHexColor(event) {
  bodyEl.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}