document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // prevent page reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill in both fields.");
    return;
  }

  try {
    // 🔹 Simulated login (replace later with backend API call)
    let role = null;
    let foundUser = false;

    // 1. Check hardcoded default users
    if (username === "student" && password === "1234") {
      role = "student";
      foundUser = true;
    } else if (username === "teacher" && password === "1234") {
      role = "teacher";
      foundUser = true;
    } else if (username === "admin" && password === "1234") {
      role = "admin";
      foundUser = true;
    }

    // 2. If not found, check registered users in localStorage
    if (!foundUser) {
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = registeredUsers.find(u => u.username === username && u.password === password);
      if (user) {
        role = user.role;
        foundUser = true;
      }
    }

    if (!foundUser) {
      alert("Invalid credentials!");
      return;
    }

    // Save role & username in localStorage
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    // 🔹 Redirect based on role
    if (role === "student") {
      window.location.href = "backend/dashboard-student.html";
    } else if (role === "teacher") {
      window.location.href = "backend/dashboard-teacher.html";
    } else if (role === "admin") {
      window.location.href = "backend/dashboard-admin.html";
    } else {
      window.location.href = "dashboard.html"; // fallback
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});
