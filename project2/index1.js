document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
  
      if (username === '' || password === '') {
        alert('Both username and password are required');
      } else {
        alert('Login successful');
      }
    });
  });
  