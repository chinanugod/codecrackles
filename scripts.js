window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");
  const body = document.body;

  // If no splash screen, just show content
  if (!splash) {
    body.classList.add("loaded");
    return;
  }

  setTimeout(() => {
    splash.classList.add("hidden");
    body.classList.add("loaded"); // fade in main content
    setTimeout(() => {
      splash.style.display = "none";
    }, 500); // wait for fade transition
  }, 1000); // show splash for 1s
});

// ===============================
// LANDING PAGE SLIDER (CAROUSEL)
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;
  let autoSlideTimer;
  const AUTO_DELAY = 5000; // 5 seconds

  function showSlide(newIndex, direction = "next") {
    const current = slides[currentIndex];
    const next = slides[newIndex];

    slides.forEach(slide =>
      slide.classList.remove("active", "exit-left", "exit-right")
    );

    current.classList.add(
      direction === "next" ? "exit-left" : "exit-right"
    );

    next.classList.add("active");
    currentIndex = newIndex;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length, "next");
  }

  function prevSlide() {
    showSlide(
      (currentIndex - 1 + slides.length) % slides.length,
      "prev"
    );
  }

  function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, AUTO_DELAY);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  startAutoSlide();
});

// ===============================
// DISCLAIMER OVERLAY
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("disclaimer-overlay");
  const acceptBtn = document.getElementById("acceptDisclaimer");
  const closeBtn = document.getElementById("closeDisclaimer");

  if (!overlay) return;

  const accepted = localStorage.getItem("cc_disclaimer_accepted");

  // Show disclaimer after 2 seconds if not accepted
  if (!accepted) {
    setTimeout(() => {
      overlay.classList.remove("hidden");
    }, 2000);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cc_disclaimer_accepted", "yes");
    overlay.classList.add("hidden");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });
});

// ===============================
// MENU TOGGLE & LOGOUT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const dropdown = document.getElementById("menuDropdown");
  const logoutBtn = document.getElementById("menuLogout");

  if (!toggle || !dropdown) return;

  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-container")) {
      dropdown.classList.add("hidden");
    }
  });

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    });
  }
});