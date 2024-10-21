
const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username === '' || password === '') {
    alert('Please fill out all fields');
    return;
  }
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Login successful');
      } else {
        alert('Login failed');
      }
    })
    .catch((error) => {
      alert('Error submitting form');
    });
});

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const fullName = document.getElementById('fullName').value;
  const dateOfBirth = document.getElementById('dateofBirth').value;
  const email = document.getElementById('email').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const district = document.getElementById('district').value;
  const state = document.getElementById('state').value;
  const pincode = document.getElementById('pincode').value;
  if (
    fullName === '' ||
    dateOfBirth === '' ||
    email === '' ||
    mobileNumber === '' ||
    gender === '' ||
    address === '' ||
    city === '' ||
    district === '' ||
    state === '' ||
    pincode === ''
  ) {
    alert('Please fill out all fields');
    return;
  }
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName,
      dateOfBirth,
      email,
      mobileNumber,
      gender,
      address,
      city,
      district,
      state,
      pincode,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    })
    .catch((error) => {
      alert('Error submitting form');
    });
});