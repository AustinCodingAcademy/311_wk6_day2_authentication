const button = document.querySelector("#button");
button.addEventListener("click", signup);


function signup(e) {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  e.preventDefault();
  const newUser = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password
    })
  };
  fetch("localhost:4001/auth/signup", newUser).then(res => {
    console.log("Successfully created new account!", res.json());
  });
}

module.exports = { button, signup };

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch