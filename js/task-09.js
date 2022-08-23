const btn = document.querySelector(`.change-color`);
const bodyEl = document.querySelector(`body`);
const pageEl = document.querySelector(`span`);

btn.addEventListener(`click`, getRandomHexColor);

function getRandomHexColor(event) {
  bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  pageEl.textContent = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}