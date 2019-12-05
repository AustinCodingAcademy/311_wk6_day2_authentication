const inputList = document.querySelectorAll(`input`);
const errField = document.getElementById('err');
const form = document.getElementById('form');
const button = document.getElementById('subButton')

let userObj = {};

button.addEventListener("click", e => {
  e.preventDefault();
  
  for(let i = 0; i < inputList.length; i++) {
    let inputListField = inputList[i];
    
    clearErrors(inputListField);

    if(!emptyFieldError(inputListField)) {
      makeUserObj(inputListField);
    }
  }
});

  const emptyFieldError = (inputListField) => {
    if(inputListField.value === '') {
      errField.innerText = "Both fields are required"
    }
  }

  const makeUserObj = (inputListField) => {
  userObj[inputListField.id] = inputListField.value;
  }

  const clearErrors = (inputListField) => {
    if(inputListField.value !== '') {
      errField.innerText = ""
    }
  };

  console.log(userObj)
