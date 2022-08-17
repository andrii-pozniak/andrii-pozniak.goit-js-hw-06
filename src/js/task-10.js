const btnCreate = document.querySelector(`button[data-create]`);
const divBoxes = document.querySelector(`#boxes`);
const inputEl = document.querySelector(`input`);


inputEl.addEventListener(`input`, addEventListener)

btnCreate.addEventListener(`click`, createBoxes);

function createBoxes(amount) {
  const sizeBox = "30px";
  
    const div = document.createElement("div");
  //   console.log(div);
    div.style.width = sizeBox;
    div.style.height = sizeBox;
    div.style.backgroundColor = "red";
    divBoxes.append(div);
    // console.log(div);
  // }
// divBoxes.style.width = sizeBox;
// divBoxes.style.height = sizeBox;
// divBoxes.style.backgroundColor = "red";

}
// inputEl.addEventListener = (`input`, (event) => {
  
// });
 



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
