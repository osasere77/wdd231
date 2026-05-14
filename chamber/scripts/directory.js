const cards = document.querySelector('#members');
const url = 'data/members.json';

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    members.forEach((member) => {

        const card = document.createElement('section');

        card.classList.add('member-card');

        let level = '';

        if (member.membership === 3) {
            level = 'Gold Member';
        }
        else if (member.membership === 2) {
            level = 'Silver Member';
        }
        else {
            level = 'Member';
        }

        card.innerHTML = `

            <img src="${member.image}" alt="${member.name}" loading="lazy">

            <div class="card-content">

                <h3>${member.name}</h3>

                <p class="membership-level">
                    ${level}
                </p>

                <p>${member.description}</p>

                <p>${member.address}</p>

                <p>${member.phone}</p>

                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>

            </div>
        `;

        cards.appendChild(card);
    });
};

getMembers();

// Grid/List Toggle

const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');

gridButton.addEventListener('click', () => {
    cards.classList.add('directory-grid');
    cards.classList.remove('directory-list');
});

listButton.addEventListener('click', () => {
    cards.classList.add('directory-list');
    cards.classList.remove('directory-grid');
});

// Footer

document.querySelector('#year').textContent =
new Date().getFullYear();

document.querySelector('#lastModified').textContent =
`Last Modified: ${document.lastModified}`;