function loginUser() {
  // Get the values entered by the user
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Retrieve the user data from localStorage
  const storedData = localStorage.getItem(username);

  // Check if the username exists
  if (storedData) {
      const user = JSON.parse(storedData);

      // Validate the password
      if (user.password === password) {
          alert('Login successful!');
          
          // Store the logged-in username for display after login
          localStorage.setItem('loggedInUser', username);

          // Redirect to the main map page after successful login
          window.location.href = '/Travel_Safe/Templates/index.html';
          return false; 
      } else {
          alert('Incorrect password. Please try again.');
      }
  } else {
      alert('Username does not exist. Please register first.');
      window.location.href = '/Travel_Safe/Templates/register_page.html'; // Redirect to registration page
  }

  return false; 
}
