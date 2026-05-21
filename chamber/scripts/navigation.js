const menuButton = document.querySelector("#menu-button");
const navigationLinks = document.querySelector(".navigation-links");

menuButton.addEventListener("click", () => {
    navigationLinks.classList.toggle("open");
});

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;