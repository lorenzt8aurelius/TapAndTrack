document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const registerMessage = document.getElementById("registerMessage"); // Ensure this element exists in your HTML

  registerForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Reset message
    registerMessage.textContent = "";
    registerMessage.style.color = "red";

    if (!username || !password || !role) {
      registerMessage.textContent = "Please fill in all fields.";
      return;
    }

    const registrationData = { username, password, role };

    try {
      // IMPORTANT: Update this URL to match your backend's running port.
      const response = await fetch("https://localhost:7123/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        registerMessage.textContent = "Registration successful! Redirecting to login...";
        registerMessage.style.color = "green";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      } else {
        // Display server-side errors (e.g., "Username already exists.")
        const errorText = await response.text();
        registerMessage.textContent = errorText || "Registration failed. Please try again.";
      }
    } catch (error) {
      // Handle network or server connection errors
      registerMessage.textContent = "Could not connect to the server. Please make sure it's running.";
      console.error("Network or server error:", error);
    }
  });
});