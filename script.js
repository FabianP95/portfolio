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
    buttonElement.querySelector('span').classList.toggle('menu-toggle-icon--active');
    const menu = document.getElementById('navMenuResp');
    if (menu) {
        menu.classList.toggle('opacity-set');
    }
}
