const form = document.querySelector(`.login-form`);
function alert() {

    form.insertAdjacentHTML("beforeend", `<p>All fields must be filled</p>`)
   
}

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (formElements.email.value === "" || formElements.password.value === "") {       
        alert();
        
        return;
    }
   
    const formData ={
        email, password,
    };
    form.reset();
    console.log(formData);
    
};

