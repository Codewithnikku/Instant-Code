function loginUser() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (!email || !password) {
        alert("Please enter both email and password.");
        return;
      }

      alert("Login successful.");
    }