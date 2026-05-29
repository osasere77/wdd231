const memberURL = "./data/members.json";

const spotlightContainer =
document.querySelector("#spotlight-container");

async function getMembers() {

    try {

        const response =
        await fetch(memberURL);

        if (!response.ok) {
            throw new Error("Could not fetch member data");
        }

        const members =
        await response.json();

        displaySpotlights(members);

    } catch(error) {

        console.error(error);

        spotlightContainer.innerHTML = `

            <p>
                Member spotlight unavailable.
            </p>
        `;
    }
}

function displaySpotlights(members) {

    spotlightContainer.innerHTML = "";

    /* GOLD = 3
       SILVER = 2
    */

    const filteredMembers =
    members.filter(member =>

        member.membership === 3 ||

        member.membership === 2
    );

    filteredMembers.sort(() =>
        0.5 - Math.random()
    );

    const selectedMembers =
    filteredMembers.slice(0, 3);

    selectedMembers.forEach(member => {

        const card =
        document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `

            <img src="${member.image}"
                 alt="${member.name}"
                 loading="lazy">

            <div class="spotlight-card-content">

                <h3>${member.name}</h3>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <p>
                    ${
                        member.membership === 3
                        ? "Gold Member"
                        : "Silver Member"
                    }
                </p>

                <p>
                    ${member.description}
                </p>

                <a href="${member.website}"
                   target="_blank">

                    Visit Website

                </a>

            </div>
        `;

        spotlightContainer.appendChild(card);
    });
}

getMembers();