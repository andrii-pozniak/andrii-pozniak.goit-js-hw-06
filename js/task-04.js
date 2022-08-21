const counterEl= document.querySelector(`#value`);

const decrementBtnListener = document.querySelector(`button[data-action="decrement"]`);
const incrementBtnListener = document.querySelector(`button[data-action="increment"]`);

let click = 0;
const counterValue = ((event, incrementBtnListener, decrementBtnListener) => { 
 
});

decrementBtnListener.addEventListener(`click`, (event) => {
    
    click -= 1;
    if (click <= 0) {
        click = 0;
    }
    counterEl.textContent = click;
   
});

incrementBtnListener.addEventListener(`click`, (event) => {
    click += 1;
    counterEl.textContent = click; 
   
});
