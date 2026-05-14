const menuButton = document.querySelector('#menu-button');
const navigation = document.querySelector('.navigation-links');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
});