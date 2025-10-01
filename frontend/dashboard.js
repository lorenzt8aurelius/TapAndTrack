document.addEventListener("DOMContentLoaded", () => {
  // Get user info from localStorage
  const role = localStorage.getItem("role");
  const username = localStorage.getItem("username");

  // Redirect to login if no role is found
  if (!role) {
    window.location.href = "../index.html";
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html"; // Go back to the login page
  });
});
