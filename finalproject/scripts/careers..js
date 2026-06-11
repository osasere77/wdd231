const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

const careerContainer = document.querySelector("#careerContainer");
const filter = document.querySelector("#careerFilter");

const modal = document.querySelector("#careerModal");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalSalary = document.querySelector("#modalSalary");
const modalEducation = document.querySelector("#modalEducation");
const modalSkills = document.querySelector("#modalSkills");
const closeModal = document.querySelector("#closeModal");

let careers = [];

async function getCareers() {
    try {
        const response = await fetch("data/careers.json");

        if (!response.ok) {
            throw new Error("Unable to load career data");
        }

        careers = await response.json();

        displayCareers(careers);

        const statsElement = document.querySelector("#stats");
        if (statsElement) {
            displayStats(careers);
        }

    } catch (error) {
        console.error(error);

        if (careerContainer) {
            careerContainer.innerHTML =
                "<p>Error loading career data.</p>";
        }
    }
}

function displayStats(careers) {
    const stats = document.querySelector("#stats");

    if (!stats) return;

    const tech = careers.filter(
        c => c.category === "Technology"
    ).length;

    const business = careers.filter(
        c => c.category === "Business"
    ).length;

    const healthcare = careers.filter(
        c => c.category === "Healthcare"
    ).length;

    const engineering = careers.filter(
        c => c.category === "Engineering"
    ).length;

    stats.innerHTML = `
        <div class="card">
            <h3>${careers.length}</h3>
            <p>Total Careers</p>
        </div>

        <div class="card">
            <h3>${tech}</h3>
            <p>Technology</p>
        </div>

        <div class="card">
            <h3>${business}</h3>
            <p>Business</p>
        </div>

        <div class="card">
            <h3>${healthcare}</h3>
            <p>Healthcare</p>
        </div>

        <div class="card">
            <h3>${engineering}</h3>
            <p>Engineering</p>
        </div>
    `;
}

function displayCareers(data) {
    if (!careerContainer) return;

    careerContainer.innerHTML = "";

    data.forEach(career => {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${career.name}</h3>

            <p><strong>Category:</strong> ${career.category}</p>

            <p><strong>Salary:</strong> ${career.salary}</p>

            <p><strong>Education:</strong> ${career.education}</p>

            <button class="btn detailsBtn">
                View Details
            </button>
        `;

        careerContainer.appendChild(card);

        card.querySelector(".detailsBtn")
            .addEventListener("click", () => {

                if (modalTitle)
                    modalTitle.textContent = career.name;

                if (modalDescription)
                    modalDescription.textContent = career.description;

                if (modalSalary)
                    modalSalary.textContent = `Salary: ${career.salary}`;

                if (modalEducation)
                    modalEducation.textContent = `Education: ${career.education}`;

                if (modalSkills)
                    modalSkills.textContent = `Skills: ${career.skills}`;

                if (modal)
                    modal.showModal();
            });
    });
}

if (filter) {
    filter.addEventListener("change", () => {

        const value = filter.value;

        if (value === "all") {
            displayCareers(careers);
            return;
        }

        const filtered = careers.filter(
            career => career.category === value
        );

        displayCareers(filtered);
    });
}

if (closeModal) {
    closeModal.addEventListener("click", () => {
        if (modal) modal.close();
    });
}

getCareers();