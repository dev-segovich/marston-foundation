// Este archivo contiene el código JavaScript para la funcionalidad de la página web
// const toggleBtn = document.querySelector(".menu-toggle");
// const closeBtn = document.querySelector(".close-menu");
// const mobileMenu = document.querySelector(".mobile-menu");

// toggleBtn.addEventListener("click", () => {
//   mobileMenu.classList.toggle("open");
// });

// closeBtn.addEventListener("click", () => {
//   mobileMenu.classList.remove("open");
// });

const workSection = document.querySelector(".work-columns");
const columns = document.querySelectorAll(".column");

if (workSection && columns.length > 0) {
    // Establecer fondo inicial solo si existen columnas
    const initialBg = columns[0].getAttribute("data-bg");
    workSection.style.backgroundImage = `url(${initialBg})`;
  
    // Cambiar imagen al pasar el mouse
    columns.forEach((col) => {
      col.addEventListener("mouseenter", () => {
        const bg = col.getAttribute("data-bg");
        workSection.style.backgroundImage = `url(${bg})`;
      });
    });
  }

const mobileBlocks = document.querySelectorAll(".mobile-block");

if (mobileBlocks.length > 0) {
    mobileBlocks.forEach((block) => {
      block.addEventListener("click", () => {
        mobileBlocks.forEach((b) => {
          if (b !== block) b.classList.remove("active");
        });
        block.classList.toggle("active");
      });
    });
  }

const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2 // Se activa cuando el 20% del elemento es visible
});

animatedElements.forEach(el => observer.observe(el));
