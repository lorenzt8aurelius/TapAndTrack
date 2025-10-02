document.addEventListener("DOMContentLoaded", () => {
  // Get user info from localStorage
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  // Redirect to login if no role is found
  if (!role) {
    window.location.href = "../index.html";
  }

  // Personalize the welcome message
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage && username) {
    // Capitalize the first letter of the username for display
    const capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
    welcomeMessage.textContent = `Welcome, ${capitalizedUsername}!`;
  }


  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html"; // Go back to the login page
  });
});
