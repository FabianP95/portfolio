const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        panels[i].classList.add('active');
    });
});



function toggleMenu(buttonElement) {
    buttonElement.querySelector('span').classList.toggle('burger-icon--open');
    const burgerMenu = document.querySelector('.nav-menu-container');
    if (burgerMenu) {
        burgerMenu.classList.toggle('is-active');
    }
}