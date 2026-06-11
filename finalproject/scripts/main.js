// Mobile Navigation

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

// Learn More Modal

const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const infoModal = document.querySelector("#infoModal");

if (openModal && infoModal) {
    openModal.addEventListener("click", () => {
        infoModal.showModal();
    });
}

if (closeModal && infoModal) {
    closeModal.addEventListener("click", () => {
        infoModal.close();
    });
}

// Close modal when clicking outside

if (infoModal) {
    infoModal.addEventListener("click", (event) => {
        const dialogDimensions = infoModal.getBoundingClientRect();

        if (
            event.clientX < dialogDimensions.left ||
            event.clientX > dialogDimensions.right ||
            event.clientY < dialogDimensions.top ||
            event.clientY > dialogDimensions.bottom
        ) {
            infoModal.close();
        }
    });
}

// Welcome Message

const currentHour = new Date().getHours();

const heroText = document.querySelector(".hero p");

if (heroText) {

    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    heroText.innerHTML = `
        ${greeting}
        Discover careers, learn valuable skills,
        and create personalized study plans
        that help you achieve your goals.
    `;
}