const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        panels[i].classList.add('active');
        addBorderRadius(i);

    });
});

function addBorderRadius(i) {
    document.getElementById('projectsContainer').classList.remove('border-radius-0');
    document.getElementById('projectsContainer').classList.remove('border-radius-1-2');
    document.getElementById('projectsContainer').classList.remove('border-radius-3');
    if (i <= 0) {
        document.getElementById('projectsContainer').classList.add('border-radius-0');
    } else
        if (i >= 1 && i <= 2) {
            document.getElementById('projectsContainer').classList.add('border-radius-1-2');
        } else {
            document.getElementById('projectsContainer').classList.add('border-radius-3');
        }
};



function toggleMenu(buttonElement) {
    buttonElement.querySelector('span').classList.toggle('burger-icon--open');
    const burgerMenu = document.querySelector('.nav-menu-container');
    if (burgerMenu) {
        burgerMenu.classList.toggle('is-active');
    }
};

/**
 * function to send user back to referrer site
 */
function redirectBack() {
    if (["datenschutz.html", "impressum.html"].some(page => document.referrer.includes(page))) {
        window.location.href = '../../index.html';
    } else if (["imprint.html", "privacy_policy.html"].some(page => document.referrer.includes(page))) {
        window.location.href = '../../html/english/english_main.html';
    } else {
        window.location.href = document.referrer;
    }
}

