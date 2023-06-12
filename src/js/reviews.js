import { dialog } from "../index.js";

const reviewsArray = ["IMDB", "Rotten Tomatoes", "The Verge", "IGN", "The Guardian"];
const reviewLinks = [
  "https://www.imdb.com/title/tt3398228/reviews",
  "https://www.rottentomatoes.com/tv/bojack_horseman",
  "https://www.theverge.com/2020/2/5/21124097/bojack-horseman-review-series-finale-netflix",
  "https://www.ign.com/tv/bojack-horseman/reviews",
  "https://www.theguardian.com/tv-and-radio/2020/jan/31/bojack-horseman-review"
]


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

    let reviewLink = document.createElement("a");
    reviewHeading.appendChild(reviewLink);
    reviewLink.href = reviewLinks[i];
    reviewLink.innerText = reviewsArray[i];
  }
	
	const closeButton = document.createElement("button");
	dialog.appendChild(closeButton);
	closeButton.innerText = "Back";

	closeButton.addEventListener("click", () => {dialog.close()});
}

export { toggleReviewsTab };
