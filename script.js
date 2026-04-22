let tabs;
let panels;
let skillsRight;
let skillsRightResp;
let menuBtn;
let menuContent;

/**
 * Initializes all event listeners and observers after content is loaded
 * @returns {void}
 */
function initializeEventListeners() {
    tabs = document.querySelectorAll('.tab');
    panels = document.querySelectorAll('.panel');
    skillsRight = document.querySelector('.content-skills-right');
    skillsRightResp = document.querySelector('.content-writing-resp');
    menuBtn = document.getElementById('burgerBtn');
    menuContent = document.getElementById('nav-menu');
    if (menuContent) {
        menuContent.addEventListener('click', (e) => {
            toggleMenu();
        });
    }
    addTabFunction(tabs)
    initializeFormElements();
    addEventListeners();
    initializeAllObservers();
}


/**
 * Attaches click event listeners to project tabs
 * @returns {void}
 */
function addTabFunction(tabs) {
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            panels[i].classList.add('active');
            addBorderRadius(i);
        });
    });
}

/**
 * Applies border radius classes to the projects container based on selected tab index
 * @param {number} i - The index of the selected tab
 * @returns {void}
 */
function addBorderRadius(i) {
    document.getElementById('projectsContainer').classList.remove('border-radius-0');
    document.getElementById('projectsContainer').classList.remove('border-radius-1-2');
    document.getElementById('projectsContainer').classList.remove('border-radius-3');
    if (i <= 0) {
        document.getElementById('projectsContainer').classList.add('border-radius-0');
    } else if (i >= 1 && i <= 2) {
        document.getElementById('projectsContainer').classList.add('border-radius-1-2');
    } else {
        document.getElementById('projectsContainer').classList.add('border-radius-3');
    }
}

/**
 * Toggles the burger menu visibility and icon state
 * @returns {void}
 */
function toggleMenu() {
    menuBtn.querySelector('span').classList.toggle('burger-icon--open');
    const burgerMenu = document.querySelector('.nav-menu-container');
    if (burgerMenu) {
        burgerMenu.classList.toggle('is-active');
    }
}

/**
 * Redirects user back to the appropriate referrer site based on page language
 * Preserves hash for anchor links if coming from a legal page
 * @returns {void}
 */
function redirectBack() {
    const referrer = document.referrer;
    if (referrer && referrer.includes('index.html')) {
        // If referrer was index.html, try to go back with history
        window.history.back();
    } else {
        // Otherwise redirect to index.html with contact section
        window.location.href = '../../index.html#contactSection';
    }
}

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
    const firstSpaceIndex = text.indexOf(' ');
    const firstWordEnd = firstSpaceIndex === -1 ? text.length : firstSpaceIndex;
    function tick() {
        if (i < text.length) {
            ++i;
            const firstWord = text.slice(0, firstWordEnd);
            const restOfText = text.slice(firstWordEnd, i);
            el.innerHTML = `<span class="first-word">${firstWord}</span>${restOfText}`;
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
}

const done = new Set();

/**
 * Initializes all intersection observers after content is loaded
 * @returns {void}
 */
function initializeAllObservers() {
    typeObserver();
    formObserver();
    skillRightObserver();
    skillObserver();
}


/**
 * Sets up an Intersection Observer to trigger typewriter effect on elements when they come into view
 * @returns {void}
 */
function typeObserver() {
    done.clear();
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !done.has(entry.target)) {
                done.add(entry.target);
                typewrite(entry.target);
            }
        });
    }, { threshold: 0.8 });

    document.querySelectorAll('.typewriter').forEach(el => observer.observe(el));
}


/**
 * Sets up an Intersection Observer to add fade animation to skill icons when they come into view
 * @returns {void}
 */
function skillObserver() {
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade')
            } else {
                entry.target.classList.remove('fade')
            }
        })
    }, { threshold: 0.3 });

    document.querySelectorAll('.skill-icon-big').forEach(el => skillObserver.observe(el));
    document.querySelectorAll('.skill-icon-small').forEach(el => skillObserver.observe(el));
}


/**
 * Sets up an Intersection Observer to add fade animation to right-aligned skill content when in view
 * @returns {void}
 */
function skillRightObserver() {
    const skillRightObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade')
            } else {
                entry.target.classList.remove('fade')
            }
        })
    }, {
        threshold: 0.3
    });
    skillsRight = document.querySelector('.content-skills-right');
    skillsRightResp = document.querySelector('.content-writing-resp');
    if (skillsRight) {
        skillRightObserver.observe(skillsRight);
    }
    if (skillsRightResp) {
        skillRightObserver.observe(skillsRightResp);
    }
}


/**
 * Sets up an Intersection Observer to add appear animation to form input wrappers when they come into view
 * @returns {void}
 */
function formObserver() {
    const formObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear')
            } else {
                entry.target.classList.remove('appear')
            }
        })
    }, {
        threshold: 0.3
    });
    document.querySelectorAll('.input-wrapper').forEach(el => formObserver.observe(el));
}