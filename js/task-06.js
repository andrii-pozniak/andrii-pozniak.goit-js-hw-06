const inputEl = document.querySelector(`input[data-length]`);
const inputClass = document.querySelector(`#validation-input`)

console.log(inputClass);
let numberWord = 0;

inputEl.addEventListener(`input`, onInputBlur);

function onInputBlur(event) {
    numberWord =  event.currentTarget.value.length;

    if (numberWord == inputEl.dataset.length) {
        
        inputClass.classList.replace(`invalid`, `valid`);
        
        return;
    }
    inputClass.classList.remove(`valid`);
    inputClass.classList.add(`invalid`);
    console.log(event.currentTarget.value);
    console.log(numberWord);
    return;


};