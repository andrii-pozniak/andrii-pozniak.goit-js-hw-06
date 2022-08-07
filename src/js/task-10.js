const btnCreate = document.querySelector(`button[data-create]`);
const divBoxes = document.querySelector(`#boxes`);
const inputEl = document.querySelector(`input`);
const btnDestroy = document.querySelector(`button[data-destroy]`);

btnDestroy.addEventListener(`click`, destroyBoxes);
btnCreate.addEventListener(`click`, createBoxes);


function createBoxes(evn) {
  let amount = inputEl.value;

  const sizeBox = 30;

  for (let i = 0; i < amount; i++) {
    console.log(amount);
    const div = document.createElement("div");
  
    div.style.width = 10 * i + sizeBox + "px";
    div.style.height = 10 * i + sizeBox + "px";
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("colorBox");
    
    divBoxes.append(div);    
  }    

}
function destroyBoxes(evn) {
  divBoxes.innerHTML = "";
  inputEl.value  = "";
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
