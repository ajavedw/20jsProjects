const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkInput(inputArr){
    inputArr.forEach(function(input) {
        if (input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }

    });
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
checkLength(min,max,input){

}
passwordMatch(input1.value,input2.value){
    if (input1.value!==input2.value){
        showError(password2,'Passwords do not match');
    }
}

function validateEmail(email){
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return re.test(String(email).toLowerCase());

}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkInput([username,email,password,password2]);
  checkLength(3,25,username);
  passwordMatch();

});
