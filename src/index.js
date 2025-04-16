import "./style.css";
import loadHomePage from "./home";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";
import loadContactPage from "./contact.js";

export const content = document.getElementById("content");

loadHomePage();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about-us");
const contactBtn = document.getElementById("contact-us");

homeBtn.addEventListener("click", () => {
    loadHomePage();
})

menuBtn.addEventListener("click", () => {
    loadMenuPage();
})

aboutBtn.addEventListener("click", () => {
    loadAboutPage();
})

contactBtn.addEventListener("click", () => {
    loadContactPage();
})