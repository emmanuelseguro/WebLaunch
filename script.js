document.addEventListener("DOMContentLoaded", function () {
    // MENÚ RESPONSIVE
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // BOTÓN VOLVER ARRIBA
    const scrollButton = document.querySelector("#scrollTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ANIMACIÓN DE SCROLL
    const elementos = document.querySelectorAll(".fade-in");

    const mostrarElemento = () => {
        elementos.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", mostrarElemento);
    mostrarElemento();

    // MODO OSCURO
    const darkModeToggle = document.querySelector("#darkModeToggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // VALIDACIÓN DEL FORMULARIO
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();

        if (nombre === "" || email === "") {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); // Evita el envío del formulario
        }
    });
});
