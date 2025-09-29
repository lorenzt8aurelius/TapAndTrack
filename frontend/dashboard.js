document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole") || "Guest";

  document.getElementById("roleDisplay").innerText = `You are logged in as: ${role}`;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "index.html";
  });
});
