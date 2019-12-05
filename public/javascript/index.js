const inputList = document.querySelectorAll(`input`);
const errField = document.getElementById('err');
const form = document.getElementById('form');

let userObj = {};

form.addEventListener("submit", e => {
  e.preventDefault();
  for(let i = 0; i < inputList.length; i++) {
    let inputListField = inputList[i];
    
    makeUserObj(inputListField);

  }
});

const makeUserObj = (inputListField) => {
  if(inputListField.value !== '') {
  userObj[inputListField.id] = inputListField.value;
  } else {
    errField.innerText = "Both fields are required" 
  }
}

