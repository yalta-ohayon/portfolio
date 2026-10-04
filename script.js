// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
        nav.style.flexDirection = "column";
        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.left = "0";
        nav.style.width = "100%";
        nav.style.padding = "25px";
        nav.style.background = "#080b12";
    }

});


// ================= CLOSE MOBILE MENU =================

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 900) {
            nav.style.display = "none";
        }

    });

});


// ================= CURRENT YEAR =================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent = `© ${year} Yalta Ohayon`;
}