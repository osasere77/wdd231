const places = [
{
name: "Benin National Museum",
address: "Kings Square, Benin City",
image: "images/museum.webp",
description: "Historic artifacts and Benin Kingdom treasures."
},

{
name: "Ogba Zoo",
address: "Airport Road, Benin City",
image: "images/zoo.webp",
description: "Wildlife conservation center with family attractions."
},

{
name: "Samuel Ogbemudia Stadium",
address: "Ring Road, Benin City",
image: "images/stadium.webp",
description: "Modern sports and entertainment venue."
},

{
name: "Benin Moat",
address: "Benin City",
image: "images/moat.webp",
description: "Ancient earthworks recognized worldwide."
},

{
name: "University of Benin",
address: "Ugbowo, Benin City",
image: "images/uniben.webp",
description: "One of Nigeria's leading universities."
},

{
name: "Emotan Statue",
address: "Kings Square",
image: "images/emotan.webp",
description: "Famous cultural monument in Edo State."
},

{
name: "Igun Street",
address: "Benin City",
image: "images/igun.webp",
description: "Home of traditional bronze casting."
},

{
name: "Saro-Wiwa Square",
address: "Benin City",
image: "images/square.webp",
description: "Popular event and relaxation center."
}
];

const cards = document.getElementById("discoverCards");

places.forEach(place => {
    const card = document.createElement("section");

    card.classList.add("place-card");

    card.innerHTML = `
        <h2>${place.name}</h2>

        <img
        src="${place.image}"
        alt="${place.name}"
        loading="lazy">

        <address>${place.address}</address>

        <p>${place.description}</p>

        <button>Learn More</button>
    `;

    cards.appendChild(card);
});

const visitMessage = document.getElementById("visitMessage");

const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
    visitMessage.textContent =
    "Welcome! Let us know if you have any questions.";
}
else {
    const now = Date.now();

    const days =
    Math.floor((now - Number(lastVisit)) / 86400000);

    if (days < 1) {
        visitMessage.textContent =
        "Back so soon! Awesome!";
    }
    else if (days === 1) {
        visitMessage.textContent =
        "You last visited 1 day ago.";
    }
    else {
        visitMessage.textContent =
        `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", Date.now());