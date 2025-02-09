    // Retrieve the stored username from local storage
    const storedUsername = localStorage.getItem('loggedInUser');
    const authOptions = document.getElementById('auth-options');

    if (storedUsername) {
        authOptions.innerHTML = `
            <span>Welcome, ${storedUsername}</span>
            <button onclick="logout()">Logout</button>
        `;
    } else {
        // If no user is logged in, display Login and Register buttons
        authOptions.innerHTML = `
            <button onclick="window.location.href='/Travel_Safe/Templates/login_Page.html'>Login</button>
            <button onclick="window.location.href='/Travel_Safe/Templates/register_page.html'>Register</button>
        `;
    }

    // Logout function
    function logout() {
        // Remove the stored username from local storage
        localStorage.removeItem('loggedInUser');
        
        // Redirect to the login page
        window.location.href = '/Travel_Safe/Templates/login_Page.html';
    }

