document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.getElementById("role").value;

  if (!username || !password || !role) {
    alert("Please fill in all fields.");
    return;
  }

  // In a real application, you would send this data to a backend server
  // to create a new user in the database.
  console.log("New user registered (simulated):", { username, role });

  // For now, we'll just show a success message and redirect to login.
  alert("Registration successful! You can now log in.");
  window.location.href = "index.html";
});