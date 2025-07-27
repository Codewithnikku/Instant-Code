    function createAccount() {
      const firstName = document.getElementById('first-name').value;
      const lastName = document.getElementById('last-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const termsChecked = document.getElementById('terms').checked;

      if (!firstName || !lastName || !email || !password || !termsChecked) {
        alert("Please complete all fields and agree to the terms.");
        return;
      }

      alert(`Welcome ${firstName}! Your account has been created.`);
    }

    function socialLogin(provider) {
      alert(`Redirecting to ${provider} login...`);
    }
  