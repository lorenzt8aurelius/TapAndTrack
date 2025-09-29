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

document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent page reload

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Login successful! Redirecting...");
      // save token or session
      localStorage.setItem("token", result.token);
      // redirect based on role (student/teacher/admin)
      window.location.href = "dashboard.html";
    } else {
      alert(result.message || "Login failed. Try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});