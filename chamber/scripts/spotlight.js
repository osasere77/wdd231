const memberURL = "data/members.json";

async function getMembers() {

  const response = await fetch(memberURL);

  const data = await response.json();

  displaySpotlights(data.members);
}

function displaySpotlights(members) {

  const spotlightMembers = members.filter(member =>
    member.membership === "Gold" ||
    member.membership === "Silver"
  );

  spotlightMembers.sort(() => 0.5 - Math.random());

  const selected = spotlightMembers.slice(0, 3);

  const container = document.querySelector("#spotlight-container");

  selected.forEach(member => {

    const card = document.createElement("section");

    card.classList.add("spotlight-card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <p>${member.membership} Member</p>

      <a href="${member.website}" target="_blank">
        Visit Website
      </a>
    `;

    container.appendChild(card);
  });
}

getMembers();