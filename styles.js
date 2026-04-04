/* ========================================
   EDU.i — Landing Page Scripts
   ======================================== */

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}
window.addEventListener("scroll", updateActiveNav);

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Mobile menu toggle (simple scroll-to approach)
document.getElementById("mobileMenuBtn").addEventListener("click", () => {
  const links = document.getElementById("navLinks");
  links.style.display = links.style.display === "flex" ? "none" : "flex";
  links.style.position = "absolute";
  links.style.top = "64px";
  links.style.left = "0";
  links.style.right = "0";
  links.style.background = "rgba(255,255,255,.97)";
  links.style.backdropFilter = "blur(16px)";
  links.style.flexDirection = "column";
  links.style.padding = "16px 24px";
  links.style.borderBottom = "1px solid #e2e8f0";
  links.style.boxShadow = "0 8px 24px rgba(0,0,0,.08)";
  links.style.zIndex = "100";
});

// Intersection Observer for scroll animations
const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -40px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  // Animate feature cards, step cards, portal cards on scroll
  const animateEls = document.querySelectorAll(".feature-card, .step-card, .portal-card, .about-stats-card, .about-stat-item");
  animateEls.forEach((el, i) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = `opacity 0.5s ease ${i % 4 * 0.1}s, transform 0.5s ease ${i % 4 * 0.1}s`;
    observer.observe(el);
  });
});
