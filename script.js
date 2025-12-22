const form = document.getElementById("signupForm");
const statusEl = document.getElementById("formStatus");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    statusEl.textContent =
      "Thanks for joining. We will keep you posted as new tools launch.";
    form.reset();
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
