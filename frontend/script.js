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

if (data.success) {
  alert("Login successful! Role: " + data.role);

  // Save role to localStorage
  localStorage.setItem("userRole", data.role);

  window.location.href = "dashboard.html";
}

if (data.success) {
  alert("Login successful! Role: " + data.role);

  // Redirect based on role
  if (data.role === "student") {
    window.location.href = "dashboard-student.html";
  } else if (data.role === "teacher") {
    window.location.href = "dashboard-teacher.html";
  } else if (data.role === "admin") {
    window.location.href = "dashboard-admin.html";
  } else {
    alert("Unknown role, contact system admin.");
  }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // 🔹 Simulated login logic (replace later with backend call)
  let role = null;

  if (username === "student" && password === "1234") {
    role = "student";
  } else if (username === "teacher" && password === "1234") {
    role = "teacher";
  } else if (username === "admin" && password === "1234") {
    role = "admin";
  } else {
    alert("Invalid credentials!");
    return;
  }

  // Save role in localStorage (so dashboard knows who is logged in)
  localStorage.setItem("role", role);
  localStorage.setItem("username", username);

  // Redirect to dashboard
  window.location.href = "dashboard.html";
});
