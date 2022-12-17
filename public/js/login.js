const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  const errorMes = document.getElementById('pass-err')

  if (!email || !password) {
    errorMes.style.display = 'block'
    errorMes.innerHTML = 'Inputs cannot be black'
  }

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
    } else {
        if (response.statusText === 'Invalid email, please try again') {
          errorMes.style.display = 'block'
          errorMes.innerHTML = 'Invalid email, please try again'
        } else if (response.statusText === 'Incorrect password, please try again') {
          errorMes.style.display = 'block'
          errorMes.innerHTML = 'Incorrect password, please try again'
        } else {
          errorMes.style.display = 'block'
          errorMes.innerHTML = 'Something went wrong, please try again'
        }
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-button')
  .addEventListener('click', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
