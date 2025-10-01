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

    // Save role & username in localStorage
    localStorage.setItem("role", role);
    localStorage.setItem("username", username);

    // 🔹 Redirect based on role
    if (role === "student") {
      window.location.href = "dashboard-student.html";
    } else if (role === "teacher") {
      window.location.href = "dashboard-teacher.html";
    } else if (role === "admin") {
      window.location.href = "dashboard-admin.html";
    } else {
      window.location.href = "dashboard.html"; // fallback
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});
