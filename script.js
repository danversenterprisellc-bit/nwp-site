const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Demo mode only (no backend yet)
    formMsg.textContent = "Thanks! Your inquiry was submitted (demo mode).";
    contactForm.reset();
  });
}