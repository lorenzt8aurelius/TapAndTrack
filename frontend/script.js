document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    alert("Login attempt with:\nUsername: " + username + "\nPassword: " + password);
    // 🔜 Later, replace with backend API call
    window.location.href = "dashboard.html"; 
  } else {
    alert("Please fill in both fields.");
  }
});
