const btnCreate = document.querySelector(`button[data-create]`);
const divBoxes = document.querySelector(`#boxes`);
const inputEl = document.querySelector(`input`);
const btnDestroy = document.querySelector(`button[data-destroy]`);

btnDestroy.addEventListener(`click`, destroyBoxes);
btnCreate.addEventListener(`click`, createBoxes);

let size = 30;

function createBoxes(evn) {
  let amount = inputEl.value; 
  
  for (let i = 0; i < amount; i++) {
    
    console.log(amount);
    const div = document.createElement("div");
    size += 10;
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("colorBox");    
    
    divBoxes.append(div);    
  }    

}

function destroyBoxes(evn) {
  divBoxes.innerHTML = "";
  inputEl.value  = "";
  size = 30;
  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
