document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

// =========================
// SIGN-UP HANDLER
// =========================
  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fullname = document.getElementById("fullname").value.trim();
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;

      if (!fullname || !email || !password) {
        alert("Please fill in all fields!");
        return;
      }

// Temporary local storage before backend integration
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((u) => u.email === email);

      if (existingUser) {
        alert("User already exists! Try logging in instead.");
        return;
      }

      users.push({ fullname, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registration successful! Redirecting to login...");
      window.location.href = "login.html";
    });
  }

// =========================
// LOGIN HANDLER
// =========================
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (!user) {
        alert("Invalid email or password.");
        return;
  }

// // Store logged-in user in localStorage
// localStorage.setItem("loggedInUser", JSON.stringify(user));

// 🔐 SAFE STORAGE (password removed)
const safeUser = {
    fullname: user.fullname,
    email: user.email
  };

  localStorage.setItem("loggedInUser", JSON.stringify(safeUser));
    
  alert(`Welcome ${safeUser.fullname}! Redirecting to dashboard...`);
    window.location.href = "dashboard.html";
  });
}
});
