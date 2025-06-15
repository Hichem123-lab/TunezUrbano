document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault(); const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const errorMessage = document.getElementById('error-message');
fetch('php/login.php', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}` })
.then(res => res.json()).then(data => { if (data.success) { window.location.href = 'dashboard.php'; } else { errorMessage.textContent = data.message; } }); });