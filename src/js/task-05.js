const inputEl = document.querySelector(`#name-input`);
const textSpan = document.querySelector(`#name-output`);
console.log(textSpan.textContent);

inputEl.addEventListener(`input`, onInputChange);


function onInputChange(event) {
    
    if(event.currentTarget.value === "") {
        textSpan.textContent = "Anonymous";
        return;
    }    
    textSpan.textContent = event.currentTarget.value;
    console.log(textSpan.textContent);

}
