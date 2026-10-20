// Año actual en el pie
document.getElementById("year").textContent = new Date().getFullYear();

// Links internos: bajan a la sección sin agregar #seccion a la URL
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Aparición suave de las secciones al hacer scroll
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}
