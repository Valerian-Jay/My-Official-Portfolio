/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 50);
});


/* =========================
   MOBILE MENU
========================= */
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

if (mobileMenu && navLinks) {

    mobileMenu.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");

        const isOpen = navLinks.classList.contains("mobile-open");

        mobileMenu.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });

    /* Close menu after clicking a navigation link */

    navLinks.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");

            mobileMenu.setAttribute(
                "aria-label",
                "Open menu"
            );
        });
    });
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section .reveal-left, " +
    ".section .reveal-right, " +
    ".section .reveal-up"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

function updateActiveNav() {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.id;
        }
    });

    navItems.forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${currentSection}`
        );
    });
}

window.addEventListener("scroll", updateActiveNav);


/* =========================
   3D CARD EFFECT
   DESKTOP ONLY
========================= */

const cards = document.querySelectorAll(
    ".project-card, .skill-card"
);

if (window.matchMedia("(hover: hover)").matches) {

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-7px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
        });

    });
}


/* =========================
   GLASS POINTER LIGHT
   DESKTOP ONLY
========================= */

const glassElements = document.querySelectorAll(".glass");

if (window.matchMedia("(hover: hover)").matches) {

    glassElements.forEach((glass) => {

        glass.addEventListener("mousemove", (event) => {

            const rect = glass.getBoundingClientRect();

            const x =
                ((event.clientX - rect.left) / rect.width) * 100;

            const y =
                ((event.clientY - rect.top) / rect.height) * 100;

            glass.style.setProperty("--mouse-x", `${x}%`);
            glass.style.setProperty("--mouse-y", `${y}%`);
        });

    });
}


/* =========================
   MAGNETIC BUTTONS
   DESKTOP ONLY
========================= */

const buttons = document.querySelectorAll(
    ".primary-button, .secondary-button, .talk-button"
);

if (window.matchMedia("(hover: hover)").matches) {

    buttons.forEach((button) => {

        button.addEventListener("mousemove", (event) => {

            const rect = button.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.08;

            const moveY =
                (y - rect.height / 2) * 0.08;

            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform =
                "translate(0, 0)";
        });

    });
}