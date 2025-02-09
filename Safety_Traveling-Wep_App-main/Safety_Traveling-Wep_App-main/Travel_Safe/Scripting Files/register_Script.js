function registerUser() {
  const fullname = document.getElementById('fullname').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username already exists in localStorage
  if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose a different username.');
      return false; // Prevent form submission
  }

  // Store the user details in localStorage
  const userData = { fullname, password };
  localStorage.setItem(username, JSON.stringify(userData));

  alert('Registration successful! Redirecting to login page...');
  window.location.href = '/Travel_Safe/Templates/login_Page.html'; // Redirect to login page

  return false; 
}
