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


  const logoutBtn = document.getElementById("logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "../index.html"; // Go back to the login page
  });

  // --- QR Code Generation Logic (for Teacher Dashboard) ---
  const generateQrBtn = document.getElementById("generateQrBtn");
  const qrcodeContainer = document.getElementById("qrcode");

  if (generateQrBtn && qrcodeContainer) {
    // Ensure QRCode library is loaded
    if (typeof QRCode === "undefined") {
        console.error("QRCode library is not loaded!");
        return;
    }

    const qrCode = new QRCode(qrcodeContainer, {
        width: 200,
        height: 200,
    });

    generateQrBtn.addEventListener("click", () => {
        const qrData = JSON.stringify({ classId: "CS101", timestamp: Date.now() });
        qrCode.makeCode(qrData);
        console.log("Generated QR Code with data:", qrData);
    });
  }
});
