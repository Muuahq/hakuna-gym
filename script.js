/* =========================================
   HAKUNA GYM
========================================= */


/* =========================================
   MENÚ MOBILE
========================================= */

const menuButton =
    document.getElementById("menuButton");

const nav =
    document.querySelector(".nav");


if (menuButton && nav) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


/* =========================================
   CERRAR MENÚ
========================================= */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});