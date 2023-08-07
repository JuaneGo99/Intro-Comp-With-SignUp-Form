const firstName = document.querySelector('#FirstNameInput');
const lastName = document.querySelector('#LastNameInput');
const emailAddress = document.querySelector('#EmailInput');
const password = document.querySelector('#PassInput');

const firstNameError = document.getElementById('FirstNameError');
const lastNameError = document.getElementById('LastNameError');
const emailAddressError = document.getElementById('EmailError');
const passwordError = document.getElementById('PassError');

const button = document.getElementById('button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError, 'Looks like this is not an email');
    validateEmpty(password.value, password, passwordError, 'Password cannot be empty');
});

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
        showError(divInput, divError, nameInput);
    }else{
        hideError(divInput, divError);
    }
}

function validateEmail(valueInput, divInput, divError, nameInput){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(regExp.test(valueInput) == true){
        hideError(divInput, divError);
    }else{
        showError(divInput, divError, nameInput);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '2px solid hsl(0, 100%, 74%)';
    divError.innerHTML = `<img class="icon-error" src="images/icon-error.svg" alt="">
    <p class="error-message">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}