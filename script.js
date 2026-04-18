const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');


/**
 * Applies the according css class to the project clicked on
 */
tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        panels[i].classList.add('active');
        addBorderRadius(i);

    });
});

/**
 * Applies border radius classes to the projects container based on the selected tab index
 * @param {number} i - The index of the selected tab
 * @returns {void}
 */
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



/**
 * Toggles the burger menu visibility and icon state
 * @param {HTMLElement} buttonElement - The burger menu button element
 * @returns {void}
 */
function toggleMenu(buttonElement) {
    buttonElement.querySelector('span').classList.toggle('burger-icon--open');
    const burgerMenu = document.querySelector('.nav-menu-container');
    if (burgerMenu) {
        burgerMenu.classList.toggle('is-active');
    }
};

/**
 * Redirects user back to the appropriate referrer site based on page language
 * @returns {void}
 */
function redirectBack() {
    if (["datenschutz.html", "impressum.html"].some(page => document.referrer.includes(page))) {
        window.location.href = '../../index.html';
    } else if (["imprint.html", "privacy_policy.html"].some(page => document.referrer.includes(page))) {
        window.location.href = '../../html/english/english_main.html';
    } else {
        window.location.href = document.referrer;
    }
};


/**
 * Creates a typewriter effect by gradually displaying text from the element's data-text attribute
 * @param {HTMLElement} el - The element containing the text to typewrite
 * @returns {void}
 */
function typewrite(el) {
    const text = el.dataset.text;
    let i = 0;
    el.textContent = '';
    el.classList.add('typing-cursor');
    function tick() {
        if (i < text.length) {
            el.textContent = text.slice(0, ++i);
            setTimeout(tick, 38 + Math.random() * 28);
        } else {
            el.classList.remove('typing-cursor');
            const d1 = document.createElement('span');
            d1.className = 'pipe pipe-1';
            d1.textContent = '|';
            el.appendChild(d1);
        }
    }
    tick();
};

const done = new Set();

/**
 * Observer osberves if elements come into view to add effect
 */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !done.has(entry.target)) {
            done.add(entry.target);
            typewrite(entry.target);
        }
    });
}, { threshold: 0.6 });

document.querySelectorAll('.typewriter').forEach(el => observer.observe(el));