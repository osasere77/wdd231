import { places } from "../data/places.mjs";

const container =
document.querySelector("#discoverCards");

places.forEach((place) => {

const card =
document.createElement("article");

card.classList.add("place-card");

card.innerHTML = `

<h2>${place.name}</h2>

<figure>

<img
src="${place.image}"
alt="${place.name}"
loading="lazy">

</figure>

<address>

${place.address}

</address>

<p>

${place.description}

</p>

<button>

Learn More

</button>

`;

container.appendChild(card);

});

// Local Storage Visit Message

const message =
document.getElementById("visitMessage");

const lastVisit =
localStorage.getItem("lastVisit");

const now = Date.now();

if (!lastVisit) {

message.textContent =
"Welcome! Let us know if you have any questions.";

} else {

const days =
Math.floor(
(now - Number(lastVisit))
/
86400000
);

if (days < 1) {

message.textContent =
"Back so soon! Awesome!";

}

else if (days === 1) {

message.textContent =
"You last visited 1 day ago.";

}

else {

message.textContent =
`You last visited ${days} days ago.`;

}

}

localStorage.setItem(
"lastVisit",
now
);