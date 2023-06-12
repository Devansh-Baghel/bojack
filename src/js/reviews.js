import { dialog } from "../index.js";

const reviewsArray = ["IMDB", "Rotten", "Rotten Tomatoes", "The Verge", "IGN", "The Guardian"];


function toggleReviewsTab(){
  dialog.classList.add("reviews-tab");
	dialog.innerText = "";
	dialog.show();

	const heading = document.createElement("h1");
	dialog.appendChild(heading);
	heading.innerText = "Reviews";

  const reviewsContainer = document.createElement("div");
  dialog.appendChild(reviewsContainer);

  for(let i in reviewsArray){
    let reviewCard = document.createElement("div");
    reviewsContainer.appendChild(reviewCard);
    
    let reviewHeading = document.createElement("h2");
    reviewCard.appendChild(reviewHeading);
    reviewHeading.innerText = reviewsArray[i];
  }
	
	const closeButton = document.createElement("button");
	dialog.appendChild(closeButton);
	closeButton.innerText = "Back";

	closeButton.addEventListener("click", () => {dialog.close()});
}

export { toggleReviewsTab };
