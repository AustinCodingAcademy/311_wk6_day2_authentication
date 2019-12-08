signUp = e => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  e.preventDefault();
  const newUser = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: {
      username: username,
      password: password,
    }
  }
  
};
