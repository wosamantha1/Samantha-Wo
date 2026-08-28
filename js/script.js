/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


/* Close mobile menu when a link is clicked */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


/* =========================
   RESOURCE BUTTONS
========================= */

function showResourceMessage(resourceName) {

    const message = document.getElementById("resourceMessage");

    message.textContent =
        resourceName +
        " will be available here once the resource files are added.";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thanks for reaching out! Your message has been received.";

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();
