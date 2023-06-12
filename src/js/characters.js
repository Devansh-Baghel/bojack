import { dialog } from "../index.js";

const charactersArray = ["Bojack", "Todd", "Diane", "Mr Peanut butter", "Princess Carolyn"];


function toggleCharactersTab(){
  dialog.classList.add("characters-tab");
	dialog.innerText = "";
	dialog.show();

	const heading = document.createElement("h1");
	dialog.appendChild(heading);
	heading.innerText = "Characters";

  const charactersContainer = document.createElement("div");
  dialog.appendChild(charactersContainer);

  for(let i in charactersArray){
    let card = document.createElement("div");
    charactersContainer.appendChild(card);
    
    let cardHeading = document.createElement("h2");
    card.appendChild(cardHeading);
    cardHeading.innerText = charactersArray[i];

  }
	
	const closeButton = document.createElement("button");
	dialog.appendChild(closeButton);
	closeButton.innerText = "Back";

	closeButton.addEventListener("click", () => {dialog.close()});
}

export { toggleCharactersTab };
