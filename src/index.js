import "./styles/style.scss";
import { toggleAboutTab } from "./js/about";

const body = document.querySelector("body");
const content = document.querySelector("#content");

// Logo
const logo = document.createElement("div");
content.appendChild(logo);
logo.classList.add("header")


// Tabs
const tabContainer = document.createElement("aside");
content.appendChild(tabContainer);
tabContainer.classList.add("tab-container");

const aboutTab = document.createElement("p");
const episodesTab = document.createElement("p");
const reviewsTab = document.createElement("p");

tabContainer.appendChild(aboutTab);
tabContainer.appendChild(episodesTab);
tabContainer.appendChild(reviewsTab);

aboutTab.innerText = "About";
episodesTab.innerText = "Episodes";
reviewsTab.innerText = "Reviews";

const dialog = document.createElement("dialog");
content.appendChild(dialog);
dialog.classList.add("about-tab");


// Theme Change
const svgContainer = document.createElement("div");
content.appendChild(svgContainer);
svgContainer.classList.add("svg-container");
svgContainer.addEventListener("click", () => {
	body.classList.toggle("dark");
})

aboutTab.addEventListener("click", toggleAboutTab);

export { dialog, content };