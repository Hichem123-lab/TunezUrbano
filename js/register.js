document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  errorMessage.textContent = ''; // Clear previous error

  if (!name || !phone || !email || !password) {
    errorMessage.textContent = 'Please fill in all fields.';
    return;
  }

  fetch('php/register.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      alert('Registration successful! You can now log in.');
      window.location.href = 'login.html';
    } else {
      errorMessage.textContent = data.message;
    }
  })
  .catch(error => {
    errorMessage.textContent = 'An error occurred. Please try again later.';
    console.error('Fetch error:', error);
  });
});
