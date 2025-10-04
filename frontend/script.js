document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("loginMessage");

  loginForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Reset message
    loginMessage.textContent = "";

    if (!username || !password) {
      loginMessage.textContent = "Please enter both username and password.";
      return;
    }

    const loginData = { username, password };

    try {
      // IMPORTANT: Update this URL to match your backend's running port.
      const response = await fetch("https://localhost:7123/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        const data = await response.json();
        const { user } = data;

        // Store user info from the API response to be used by the dashboard
        localStorage.setItem("username", user.username);
        localStorage.setItem("role", user.role);

        window.location.href = "dashboard.html";
      } else {
        loginMessage.textContent = "Invalid username or password.";
      }
    } catch (error) {
      loginMessage.textContent = "Could not connect to the server. Please make sure it's running.";
      console.error("Login error:", error);
    }
  });
});