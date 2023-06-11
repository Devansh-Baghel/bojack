import { dialog, content } from "../index"

const info = "BoJack Horseman is an American animated sitcom created by Raphael Bob-Waksberg. The series stars Will Arnett as the eponymous character, BoJack Horseman."

function toggleAboutTab(){
	dialog.innerText = "";
	dialog.show();

	const heading = document.createElement("h1");
	dialog.appendChild(heading);
	heading.innerText = "About Bojack Horseman";
	
	const displayInfo = document.createElement("p");
	dialog.appendChild(displayInfo);
	displayInfo.innerText = info;

	const learnMoreLink = document.createElement("a");
	dialog.appendChild(learnMoreLink);
	learnMoreLink.href = "https://bojackhorseman.fandom.com/wiki/BoJack_Horseman_(series)";
	learnMoreLink.target = "_blank" // To open the link in a new tab
	learnMoreLink.innerText = "Learn More";
	
	const closeButton = document.createElement("button");
	dialog.appendChild(closeButton);
	closeButton.innerText = "Back";

	closeButton.addEventListener("click", () => {dialog.close()});
}

export { toggleAboutTab };