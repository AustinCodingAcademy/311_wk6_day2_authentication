const button = document.querySelector('#button');
button.addEventListener('click', function (){
  console.log('howdy')
})

function signup (e) {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  console.log('hey we are connedcted')
  e.preventDefault();
  const newUser = {
    // method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: {
      username: username,
      password: password,
    }
  }
  
};
