import { places } from "../data/places.mjs";

console.log("Places loaded:", places);

const container = document.querySelector("#discoverCards");

if (!container) {
    console.error("discoverCards container not found");
}

places.forEach(place => {
    const card = document.createElement("article");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    container.appendChild(card);
});