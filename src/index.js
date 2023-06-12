import "./styles/style.scss";
import { toggleAboutTab } from "./js/about";
import { toggleReviewsTab } from "./js/reviews";

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
const charactersTab = document.createElement("p");
const reviewsTab = document.createElement("p");

tabContainer.appendChild(aboutTab);
tabContainer.appendChild(charactersTab);
tabContainer.appendChild(reviewsTab);

aboutTab.innerText = "About";
charactersTab.innerText = "Characters";
reviewsTab.innerText = "Reviews";

const dialog = document.createElement("dialog");
content.appendChild(dialog);



// Theme Change
const svgContainer = document.createElement("div");
content.appendChild(svgContainer);
svgContainer.classList.add("svg-container");
svgContainer.addEventListener("click", () => {
	body.classList.toggle("dark");
})

aboutTab.addEventListener("click", toggleAboutTab);
reviewsTab.addEventListener("click", toggleReviewsTab);

export { dialog, content };
