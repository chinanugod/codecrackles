document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides.length || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function showSlide(newIndex, direction) {
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

  nextBtn.addEventListener("click", () => {
    showSlide((currentIndex + 1) % slides.length, "next");
  });

  prevBtn.addEventListener("click", () => {
    showSlide(
      (currentIndex - 1 + slides.length) % slides.length,
      "prev"
    );
  });
});
