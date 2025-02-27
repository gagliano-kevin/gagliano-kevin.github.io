// script.js - Dynamic AI Portfolio

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const navBar = document.querySelector(".nav-bar");
    const links = document.querySelectorAll("nav ul li a");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#000";
            header.style.boxShadow = "0px 0px 20px #33ff33";
        } else {
            header.style.background = "#111";
            header.style.boxShadow = "0px 0px 10px #33ff33";
        }
    });
    
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.textShadow = "0px 0px 15px #33ff33";
        });
        link.addEventListener("mouseleave", () => {
            link.style.textShadow = "none";
        });
    });
    
    header.addEventListener("mouseover", () => {
        navBar.style.transform = "translateY(0)";
    });

    header.addEventListener("mouseleave", () => {
        navBar.style.transform = "translateY(-400%)";
    });
    
    console.log("Welcome to Kevin Gagliano's AI Portfolio - Hacker Mode Active!");
});
