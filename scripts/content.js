/**
 * Saves language preference to localStorage
 * @param {string} lang - Language code ('de' for German, 'en' for English)
 * @returns {void}
 */
function saveLanguagePreference(lang) {
    localStorage.setItem('preferredLanguage', lang);
}

/**
 * Retrieves language preference from localStorage
 * @returns {string} Language code or default 'de' if not set
 */
function getLanguagePreference() {
    return localStorage.getItem('preferredLanguage') || 'de';
}

/**
 * Initializes and loads content in the user's preferred language
 * @returns {void}
 */
function initializeLanguage() {
    const preferredLang = getLanguagePreference();
    const targetHash = window.location.hash;
    displayContent(preferredLang);
    if (targetHash) {
        setTimeout(() => {
            const element = document.querySelector(targetHash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }
}

/**
 * Displays content by setting innerHTML and initializing event listeners
 * @param {string} lang - Language code ('de' for German, 'en' for English)
 * @returns {void}
 */
function displayContent(lang) {
    saveLanguagePreference(lang);
    document.getElementById('body').innerHTML = getContent(lang);
    initializeEventListeners();
}

/**
 * Returns HTML template content based on selected language
 * @param {string} lang - Language code ('de' for German, 'en' for English)
 * @returns {string} HTML template as string
 */
function getContent(lang) {
    switch (lang) {
        case "de":
            return `<div class="wrapper-hero-section">
        <section id="hero" class="hero">
            <div class="header-resp d-none">
                <div class="logo-hero">
                    <div class="logo-hero-icon">
                        <img src="./assets/icons/logo/logoHover.svg" class="logo-hover" alt="logo icon">
                        <img src="./assets/icons/logo/logoLightBlue.svg" class="logo-default" alt="logo icon">
                    </div>
                    <p class="name">F. Puchta</p>
                    <p>Entwickler</p>
                </div>
                <button id="burgerBtn" onclick="toggleMenu()" class="menu-button" aria-label="Navigation menu"
                    aria-expanded="false" aria-controls="nav-menu">
                    <span class="burger-icon">
                        <span class="burger-line burger-line--top"></span>
                        <span class="burger-line burger-line--middle"></span>
                        <span class="burger-line burger-line--bottom"></span>
                    </span>
                </button>
            </div>
            <div class="main-image-container">
                <div class="nav-menu-container" id="nav-menu">
                    <img src="./assets/img/respMenuBck.svg" alt="responsive menu background image">
                    <div class="resp-menu-content">
                        <a href="#aboutSection">Warum ich</a>
                        <a href="#skillSection">Skills</a>
                        <a href="#projectSection">Projekte</a>
                        <a href="#contactSection">Kontakt</a>
                        <div class="navbar-language">
                            <p>DE</p>
                            <span onclick="displayContent('en')">EN</span>
                        </div>
                    </div>
                </div>
                <img src="./assets/img/heroBackgroundHover.png" class="img-background-hover"
                    alt="background in hover state">
                <img src="./assets/img/heroBackground.png" class="img-background-default"
                    alt="background in default state">
                <img src="./assets/img/profil.png" class="profil-img" alt="photo of fabian puchta">
            </div>
            <div class="info-hero-section">
                <div class="social-media-wrapper">
                    <div class="social-media"></div>
                    <div class="logo-hero">
                        <div class="logo-hero-icon">
                            <img src="./assets/icons/logo/logoHover.svg" class="logo-hover" alt="logo icon">
                            <img src="./assets/icons/logo/logoLightBlue.svg" class="logo-default" alt="logo icon">
                        </div>
                        <p class="name">F. Puchta</p>
                        <p>Entwickler</p>
                    </div>
                    <div class="social-media">
                        <a href="mailto:fabian.puchta@fabian-puchta.de" target="_blank" rel="noopener noreferrer"
                            aria-label="Email contact">
                            <img src="./assets/icons/social_media/emailBlue.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/mailMediaHover.svg" class="social-media-hover" alt=""
                                aria-hidden="true">
                        </a>
                        <a href="https://www.linkedin.com/in/fabian-puchta-7ba7383b7/" target="_blank"
                            rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <img src="./assets/icons/social_media/linkedIn.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/linkedInHover.svg" class="social-media-hover" alt=""
                                aria-hidden="true">
                        </a>
                        <a href="https://github.com/FabianP95" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub profile">
                            <img src="./assets/icons/social_media/github.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/githubHover.svg" class="social-media-hover" alt=""
                                aria-hidden="true">
                        </a>
                    </div>
                </div>
                <div class="title">
                    <h1>Fabian Puchta</h1>
                    <p>Software Entwickler</p>
                </div>
                <div class="wrapper-arrow-down">
                    <a href="#aboutSection" class="swap-image">
                        <img src="./assets/icons/hero_section/arrowDownHover.svg" class="image-hover"
                            alt="arrow pointing downward in hovered state">
                        <img src="./assets/icons/hero_section/arrowDown.svg" class="image-default"
                            alt="arrow pointing downward">
                    </a>
                </div>
            </div>
        </section>
    </div>
    <div class="wrapper-navbar">
        <nav>
            <div class="navbar-logo">
                <div class="wrapper-logo-footer">
                    <img src="./assets/icons/logo/logoDarkBlue.svg" alt="logo">
                    <p class="name">F. Puchta</p>
                    <span>Entwickler</span>
                </div>
            </div>
            <div class="navbar-menu font-size-26">
                <a href="#aboutSection">Warum ich</a>
                <a href="#skillSection">Skills</a>
                <a href="#projectSection">Projekte</a>
                <a href="#contactSection">Kontakt</a>
            </div>
            <div class="navbar-language">
                <p>DE</p>
                <span onclick="displayContent('en')">EN</span>
            </div>
        </nav>
    </div>
    <div class="content-wrapper">
        <section id="aboutSection" class="sub-section mrg-tp-section">
            <h2 class="content-headlines">Warum ich</h2>
            <div class="content-section-body">
                <div class="content-about-left">
                    <div class="info-left">
                        <img class="location-icon" src="./assets/icons/about_me/locationIcon.png" alt="location pin">
                        <img class="resp-location-icon" src="./assets/icons/about_me/locationResp.svg"
                            alt="location pin">
                        <p data-text="Ich lebe in Berlin.." class="font-size-30 typewriter">
                        </p>
                    </div>
                    <div class="info-left">
                        <img src="./assets/icons/about_me/remote.svg" alt=" laptop with wifi signal">
                        <p data-text="Ich bin offen dafür remote zu arbeiten.." class="font-size-30 typewriter">
                        </p>
                    </div>
                </div>
                <div class="content-about-right">
                    <p class="font-size-18 line-height">Das Bauen von Software macht mir Spaß, hierbei kann ich meine
                        Kreativität voll ausleben.
                        Ob im Team oder alleine, kann ich durch mein diszipliniertes Arbeiten und strukturiertes
                        Vorgehen, komplexe Probleme lösen.
                        Meine Social Skills machen mich zu einem hervorragenden Teamplayer, wo ich auch in stressigen
                        oder
                        schwierigen Situationen handlungsfähig bleibe.
                    </p>
                    <div class="write-me-btn">
                        <a href="#contactSection" class="btn font-size-18">Schreib mir</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="skillSection" class="sub-section mrg-tp-section">
            <h2 class="content-headlines">Meine Skills</h2>
            <div class="content-section-body">
                <div class="content-skills-left">
                    <img class="skill-icon-big" src="./assets/icons/skills/htmlBig.svg" alt="icon for html">
                    <img class="skill-icon-big" src="./assets/icons/skills/cssBig.svg" alt="icon for css">
                    <img class="skill-icon-big" src="./assets/icons/skills/jsBig.svg" alt="icon for java script">
                    <img class="skill-icon-big" src="./assets/icons/skills/apiBig.svg" alt="icon for an API">
                    <img class="skill-icon-big" src="./assets/icons/skills/firebaseBig.svg"
                        alt="icon for firebase storage">
                    <img class="skill-icon-big" src="./assets/icons/skills/gitBig.svg" alt="icon for gitHub">
                    <img class="skill-icon-big" src="./assets/icons/skills/scrumBig.svg" alt="icon for scrum">
                    <img class="skill-icon-small" src="./assets/icons/skills/htmlSmall.svg" alt="icon for html">
                    <img class="skill-icon-small" src="./assets/icons/skills/cssSmall.svg" alt="icon for css">
                    <img class="skill-icon-small" src="./assets/icons/skills/jsSmall.svg" alt="icon for java script">
                    <img class="skill-icon-small" src="./assets/icons/skills/apiSmall.svg" alt="icon for an API">
                    <img class="skill-icon-small" src="./assets/icons/skills/firebaseSmall.svg"
                        alt="icon for firebase storage">
                    <img class="skill-icon-small" src="./assets/icons/skills/gitSmall.svg" alt="icon for gitHub">
                    <img class="skill-icon-small" src="./assets/icons/skills/scrumSmall.svg" alt="icon for scrum">
                </div>
                <div class="content-skills-right">
                    <p class="font-size-18">Momentan lerne ich</p>
                    <div class="skills-learning">
                        <div class="new-skill">
                            <img src="./assets/icons/skills/angularSmall.svg" alt="icon for an angular">
                            <p>Angular</p>
                        </div>
                        <div class="new-skill">
                            <img src="./assets/icons/skills/typeScriptSmall.svg" alt="icon for an typescript">
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <p>Um mit den modernen Ansätzen der Webentwicklung Schritt zu halten
                    </p>
                </div>
                <div class="content-skills-resp">
                    <p class="font-size-18 color-writing-blue">Momentan lerne ich</p>
                    <div class="content-writing-resp">
                        <p class="div-space line-height">Um mit den modernen Ansätzen der Webentwicklung Schritt zu
                            halten</p>
                        <div class="div-space skills-icons-resp">
                            <div class="new-skill">
                                <img src="./assets/icons/skills/angularSmall.svg" alt="icon for an angular">
                                <p>Angular</p>
                            </div>
                            <div class="new-skill">
                                <img src="./assets/icons/skills/typeScriptSmall.svg" alt="icon for an typescript">
                                <p>TypeScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="write-me-btn-resp">
                    <a href="#contactSection" class="btn-live font-size-18">Schreib mir!</a>
                </div>
            </div>
        </section>
    </div>
    <section id="projectSection" class="sub-section mrg-tp-section">
        <h2 class="content-headlines">Meine Projekte</h2>
        <div class="nav-projects" role="tablist">
            <button class="tab active" role="tab" id="tab-join" aria-selected="true" aria-controls="panel-join"
                tabindex="0"><span class="color-writing-blue font-size-30 desktop-content">1.
                    Join</span>
                <span class="color-writing-blue font-size-30 resp-content">1. Projekt</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-pollo" aria-selected="false"
                aria-controls="panel-pollo" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">2. Pollo Loco</span>
                <span class="color-writing-blue font-size-30 resp-content">2. Projekt</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-pokedex" aria-selected="false"
                aria-controls="panel-pokedex" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">3. Pokedex</span>
                <span class="color-writing-blue font-size-30 resp-content">3. Projekt</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-future" aria-selected="false"
                aria-controls="panel-future" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">4. Kommende</span>
                <span class="color-writing-blue font-size-30 resp-content">4. Projekt</span>
            </button>
        </div>
        <div id="projectsContainer" class="card">
            <div class="content-wrapper-projects">
                <div class="panel active" data-panel="0" role="tabpanel" id="panel-join" aria-labelledby="tab-join"
                    aria-hidden="false">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/Join" class="btn" target="_blank"
                            rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    Über das Projekt
                                    <span class="font-size-18 pr-duration">Dauer: 5 Wochen</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    Join ist eine Plattform zum Organisieren von Arbeit.<br>
                                    Eingeloggt oder als Gast*Gästin, kann man Aufgaben, Unteraufgaben und Kontakte
                                    erstellen. Diese lassen sich nach diversen Kriterien im Board sortieren.
                                    Eine Übersicht gibt einem eine schnelle Übersicht über die Anzahl der Aufgaben.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Wie ich meine Arbeit strukturiert habe</h3>
                                <p class="font-size-18 line-height">
                                    Durch Anwendungen wie Trello und Github, haben meine Kollegen und ich uns die
                                    Aufgaben aufgeteilt. Hierbei war vor allem das Arbeiten
                                    in verschiedenen Branches wichtig. Durch individuelles Zuweisen der Aufgaben, einen
                                    konstanten Review Prozess aller Entwicklungen und eine gute Kommunikation über
                                    Discord,
                                    entstand ein strukturiertes und zielorientiertes Arbeiten.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Meine Erfahrung in der Gruppenarbeit</h3>
                                <p class="font-size-18 line-height">
                                    Durch tolle Kollegen lief dieses Projekt reibungslos ab. Bei dieser Arbeit habe ich
                                    das organisierte Arbeiten in Branches mit Git vertieft. <br>
                                    Etwas neues zu lernen und für andere Meinungen und Herangehensweisen offen zu sein,
                                    ist in jeder Gruppenarbeit wichtig.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologien</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Join</h3>
                                <p>Technologien: HTML, CSS, JavaScript</p>
                                <p>Dauer: 5 Wochen</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/joinScreen.png" alt="screenshot of the project 'join'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/Join" class="btn" target="_blank"
                                rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="1" role="tabpanel" id="panel-pollo" aria-labelledby="tab-pollo"
                    aria-hidden="true">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/el_pollo_loco" target="_blank" rel="noopener noreferrer"
                            class="btn">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    Über das Projekt
                                    <span class="font-size-18 pr-duration">Dauer: 3 Wochen</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    Ein klassisches Jump&Run Spiel.<br>
                                    Hierbei steuert man Pepe, kann Münzen und Flaschen einsammeln um Hühner zu
                                    bekämpfen.
                                    Am Ende des Levels wartet der Endboss auf einen.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Wie habe ich meine Arbeit organisiert</h3>
                                <p class="font-size-18 line-height">
                                    Durch eine überlegte Herangehensweise und das Unterteilen des Projekts nach
                                    einzelnen Bereichen, im Zusammenspiel mit aussagekräftigen Commits,
                                    gelang die Fertigstellung dieses Projekts.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Was habe ich gelernt</h3>
                                <p class="font-size-18 line-height">
                                    Die Neuheiten hierbei waren das Objekt orientierte Arbeiten mit Klassen in
                                    JavaScript und die Darstellung von Graphiken auf einem HTML Canvas.<br>
                                    Auch das umfängliche Arbeiten mit Intervallen war hierbei ein Fokus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologien</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Pollo Loco</h3>
                                <p>Technologien: HTML, CSS, JavaScript</p>
                                <p>Dauer: 3 Wochen</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/polloScreen.png" alt="screenshot of the project 'el pollo loco'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/el_pollo_loco" target="_blank"
                                rel="noopener noreferrer" class="btn">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="2" role="tabpanel" id="panel-pokedex" aria-labelledby="tab-pokedex"
                    aria-hidden="true">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/pokedex" class="btn" target="_blank"
                            rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    Über das Projekt
                                    <span class="font-size-18 pr-duration">Dauer: 4 Wochen</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    Pokedex ist die Darstellung aller Pokemon, nach der bekannten Vorlage aus den
                                    Spielen.<br>
                                    Hierbei werden die Pokemon mit Bild und verschiedenen Werten, sortiert nach ihrer
                                    Nummer, anhand einer Karte angezeigt.
                                    Dabei erlangt der Nutzer eine umfassende Übersicht zu jedem Pokemon.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Wie habe ich meine Arbeit organisiert</h3>
                                <p class="font-size-18 line-height">
                                    Mit Trello gelang mir hierbei die erfolgreiche Umsetzung dieses Projekts.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">Was habe ich gelernt</h3>
                                <p class="font-size-18 line-height">
                                    Gelernt habe ich bei diesem Projekt den Umgang mit APIs und JSON Objekten.<br>
                                    Vertieft wurde zudem das Nutzen von HTML Templates zur Darstellung der Pokemon.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologien</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Pokedex</h3>
                                <p>Technologien: Firebase, CSS, JavaScript, HTML</p>
                                <p>Dauer: 4 Wochen</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/pokeScreen.png" alt="screenshot of the project 'el pollo loco'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/pokedex" class="btn" target="_blank"
                                rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="3" role="tabpanel" id="panel-future" aria-labelledby="tab-future"
                    aria-hidden="true">
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    Über das Projekt
                                </h3>
                                <p class="font-size-18 line-height">
                                    In kommenden Projekten möchte ich meine Fähigkeiten in der Softwareentwicklung
                                    erweitern. Hierbei liegt mein Fokus auf dem Arbeiten und Entwickeln
                                    mit Angular und TypeScript.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologien</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/typeScriptSmall.svg" alt="typescript icon">
                                <img src="./assets/icons/skills/angularSmall.svg" alt="angular icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Kommendes Projekt</h3>
                                <p>Technologien: TypeScript, Angular, HTML, CSS, JavaScript</p>
                            </div>
                        </div>
                        <div class="future-project">
                            <span>Demnächst...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sub-section mrg-tp-section">
        <div>
            <p class="team-title">Sie brauchen einen Teamplayer?<span class="team-title-sub"> Das sagen meine
                    Kollegen</span></p>
        </div>
        <div class="quote-section">
            <article class="single-quote">
                <h4 class="font-size-26 margin-team">Gerd Lödige</h4>
                <p class="font-size-18 margin-team">Projekt <span class="color-writing-blue font-size-18 ">Join</span>
                </p>
                <p class="font-size-18 margin-team">"Fabians Engagement, seine Zielstrebigkeit und seine
                    Detailgenauigkeit machen ihn zu einer unschätzbaren Bereicherung für jedes Projekt."</p>
                <a class="single-link margin-team-link" href="https://www.linkedin.com/in/gerd-l%C3%B6dige-4a08802a9/"
                    target="_blank" rel="noopener noreferrer">LinkedIn Profil</a>
            </article>
            <article class="single-quote mrg-left">
                <h4 class="font-size-26 margin-team">Max L.</h4>
                <p class="font-size-18 margin-team">Projekt <span class="color-writing-blue font-size-18 ">Join</span>
                </p>
                <p class="font-size-18 margin-team">"Ich bedanke mich bei Fabian für seine Zusammenarbeit. Es war sehr
                          angenehm, mit ihm zusammenzuarbeiten, und ich wünsche ihm alles Gute auf seinem weiteren Weg."</p>
                <a class="single-link margin-team-link" href="https://www.linkedin.com/in/lukas-lehmann-b7b5683bb/"
                    target="_blank" rel="noopener noreferrer">LinkedIn
                    Profil</a>
            </article>
        </div>
    </section>
    <section id="contactSection" class="contact-section">
        <div class="sub-section mrg-tp-section">
            <h2 class="content-headlines">Kontakt</h2>
            <div class="content-contact-body">
                <p class="content-contact-left font-size-18">
                    Schreiben Sie mir gerne bei Interesse, Nachfrage zu meinen Projekten oder professioneller
                    Zusammenarbeit.
                    Sie erreichen mich per Email oder Telefon.<br>
                    Ich würde mich freuen von Ihnen zu hören!
                </p>
                <div class="content-contact-right">
                    <a class="contact-section-mail font-size-20" href="mailto:fabian.puchta@fabian-puchta.de">E-Mail:
                        fabian.puchta@fabian-puchta.de</a>
                    <a href="tel:+4915124181798" class="contact-section-phone font-size-20">Tel: 015124181798</a>
                </div>
            </div>
            <div class="form-wrapper">
                <form id="form">
                    <div class="row-name-mail">
                        <div id="nameContainer" class="input-wrapper">
                            <label for="formName" id="formLabelName">Ihr Name <span class="error-message d-none">ist
                                    erforderlich
                                </span></label>
                            <div class="input-field">
                                <input type="text" name="name" id="formName" aria-required="true">
                            </div>
                        </div>
                        <div id="mailContainer" class="input-wrapper">
                            <label for="formMail" id="formLabelMail">Ihre Email<span class="error-message d-none"> muss
                                    gültig sein
                                </span></label>
                            <div class="input-field">
                                <input type="email" name="mail" id="formMail" aria-required="true">
                            </div>
                        </div>
                    </div>
                    <div id="messageContainer" class="input-wrapper width-100">
                        <label for="formMessage" id="formLabelMessage">Ihre Nachricht an mich <span
                                class=" error-message d-none">muss mindestens 10 Zeichen enthalten</span></label>
                        <div class="input-field">
                            <textarea name="message" id="formMessage" rows="10" aria-required="true"></textarea>
                        </div>
                    </div>
                    <div class="contact-accept-section">
                        <div>
                            <div class="accept-policy-wrapper">
                                <label for="accept" class="checkbox-wrapper" id="checkbox">
                                    <input onchange="setPrivacySwitch()" class="d-none" type="checkbox" id="accept"
                                        value="accepted" aria-required="true" aria-describedby="errorPolicy">
                                    <div class="checkbox-icon">
                                        <img src="./assets/icons/contact/checkBox.svg" class="icon-default"
                                            alt="checkbox icon in default state" aria-hidden="true">
                                        <img src="./assets/icons/contact/checkBoxHover.svg" class="icon-hover d-none"
                                            alt="checkbox icon in hover state" aria-hidden="true">
                                        <img src="./assets/icons/contact/checkBoxChecked.svg"
                                            class="icon-checked d-none" alt="checkbox icon in accepted state"
                                            aria-hidden="true">
                                    </div>
                                    <div class="checkbox-error d-none">
                                        <img src="./assets/icons/contact/checkBoxMissing.svg" class="icon-error"
                                            alt="checkbox icon in missing state" aria-hidden="true">
                                    </div>
                                </label>
                                <p id="acceptPolicyText">Ich habe die <a
                                        href="./html/german/datenschutz.html">Datenschutzbestimmungen
                                    </a> gelesen und stimme diesen zu.</p>
                            </div>
                            <span class="error-message vis-hidden" id="errorPolicy">Akzeptieren der
                                Datenschutzbestimmung
                                erforderlich.</span>
                        </div>
                    </div>
                    <div id="wrapperBtn" class="send-btn-pos">
                        <button class="btn" type="button" id="sendBtn" disabled aria-disabled="true">Senden</button>
                    </div>
                </form>
                <div class="response-window" id="responseContainer" role="alert" aria-live="polite" aria-hidden="true">
                    <div class="response-content">
                        <p id="responseMessage">Ihre Nachricht wurde erfolgreich an mich geschickt. Vielen Dank!</p>
                    </div>
                </div>
            </div>
        </div>
        <aside class="wrapper-arrow-up">
            <a href="#hero" class="swap-image">
                <img src="./assets/icons/hero_section/arrowUpHover.svg" class="image-hover"
                    alt="arrow pointing upward in hovered state">
                <img src="./assets/icons/hero_section/arrowUp.svg" class="image-default" alt="arrow pointing upward">
            </a>
        </aside>
    </section>
    <footer class="wrapper-footer">
        <div class="content-wrapper-footer">
            <div class="footer-legal">
                <a href="./html/german/impressum.html">Impressum</a>
                <a href="./html/german/datenschutz.html">Datenschutz</a>
                <p>&copy;Fabian Puchta 2026</p>
            </div>
            <div class="wrapper-logo-footer">
                <img src="./assets/icons/logo/logoDarkBlue.svg" alt="logo">
                <p class="name">F. Puchta</p>
                <span>Entwickler</span>
            </div>
            <div class="wrapper-social-media-footer">
                <a href="https://github.com/FabianP95" target="_blank" rel="noopener noreferrer" class="swap-image"
                    aria-label="GitHub profile">
                    <img src="./assets/icons/contact/githubFooter.svg" alt="" class="image-default" aria-hidden="true">
                    <img src="./assets/icons/contact/gitHoverFooter.svg" class="image-hover" alt="" aria-hidden="true">
                </a>
                <a href="mailto:fabian.puchta@fabian-puchta.de" target="_blank" rel="noopener noreferrer"
                    class="swap-image" aria-label="Email contact">
                    <img src="./assets/icons/contact/mailFooter.svg" alt="" class="image-default" aria-hidden="true">
                    <img src="./assets/icons/contact/mailHoverFooter.svg" class="image-hover" alt="" aria-hidden="true">
                </a>
                <a href="https://www.linkedin.com/in/fabian-puchta-7ba7383b7/" target="_blank" rel="noopener noreferrer"
                    class="swap-image" aria-label="LinkedIn profile">
                    <img src="./assets/icons/contact/linkedInFooter.svg" alt="" class="image-default"
                        aria-hidden="true">
                    <img src="./assets/icons/contact/linkedInHoverFooter.svg" class="image-hover" alt=""
                        aria-hidden="true">
                </a>
            </div>
        </div>
    </footer>`;
        case "en":
            return ` <div class="wrapper-hero-section">
        <section id="hero" class="hero">
            <div class="header-resp d-none">
                <div class="logo-hero">
                    <div class="logo-hero-icon">
                        <img src="./assets/icons/logo/logoHover.svg" class="logo-hover" alt="logo icon">
                        <img src="./assets/icons/logo/logoLightBlue.svg" class="logo-default" alt="logo icon">
                    </div>
                    <p class="name">F. Puchta</p>
                    <p>Developer</p>
                </div>
                <button id="burgerBtn" onclick="toggleMenu(this)" class="menu-button" aria-label="Navigation menu"
                    aria-expanded="false" aria-controls="nav-menu">
                    <span class="burger-icon">
                        <span class="burger-line burger-line--top"></span>
                        <span class="burger-line burger-line--middle"></span>
                        <span class="burger-line burger-line--bottom"></span>
                    </span>
                </button>
            </div>
            <div class="main-image-container">
                <div class="nav-menu-container" id="nav-menu">
                    <img src="./assets/img/respMenuBck.svg" alt="responsive menu background image">
                    <div class="resp-menu-content">
                        <a href="#aboutSection">Why me</a>
                        <a href="#skillSection">Skills</a>
                        <a href="#projectSection">Projects</a>
                        <a href="#contactSection">Contact</a>
                        <div class="navbar-language">
                            <span onclick="displayContent('de')">DE</span>
                            <p>EN</p>
                        </div>
                    </div>
                </div>
                <img src="./assets/img/heroBackgroundHover.png" class="img-background-hover"
                    alt="background in hover state">
                <img src="./assets/img/heroBackground.png" class="img-background-default"
                    alt="background in default state">
                <img src="./assets/img/profil.png" class="profil-img" alt="photo of fabian puchta">
            </div>
            <div class="info-hero-section">
                <div class="social-media-wrapper">
                    <div class="social-media"></div>
                    <div class="logo-hero">
                        <div class="logo-hero-icon">
                            <img src="./assets/icons/logo/logoHover.svg" class="logo-hover" alt="logo icon">
                            <img src="./assets/icons/logo/logoLightBlue.svg" class="logo-default" alt="logo icon">
                        </div>
                        <p class="name">F. Puchta</p>
                        <p>Frontend Developer</p>
                    </div>
                    <div class="social-media">
                        <a href="mailto:fabian.puchta@fabian-puchta.de" target="_blank" rel="noopener noreferrer"
                            aria-label="Email contact">
                            <img src="./assets/icons/social_media/emailBlue.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/mailMediaHover.svg" class="social-media-hover"
                                alt="" aria-hidden="true">
                        </a>
                        <a href="https://www.linkedin.com/in/fabian-puchta-7ba7383b7/" target="_blank"
                            rel="noopener noreferrer" aria-label="LinkedIn profile">
                            <img src="./assets/icons/social_media/linkedIn.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/linkedInHover.svg" class="social-media-hover"
                                alt="" aria-hidden="true">
                        </a>
                        <a href="https://github.com/FabianP95" target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub profile">
                            <img src="./assets/icons/social_media/github.svg" class="social-media-default" alt=""
                                aria-hidden="true">
                            <img src="./assets/icons/social_media/githubHover.svg" class="social-media-hover" alt=""
                                aria-hidden="true">
                        </a>
                    </div>
                </div>
                <div class="title">
                    <h1>Fabian Puchta</h1>
                    <p>Frontend Developer</p>
                </div>
                <div class="wrapper-arrow-down">
                    <a href="#aboutSection" class="swap-image">
                        <img src="./assets/icons/hero_section/arrowDownHover.svg" class="image-hover"
                            alt="arrow pointing downward in hovered state">
                        <img src="./assets/icons/hero_section/arrowDown.svg" class="image-default"
                            alt="arrow pointing downward">
                    </a>
                </div>
            </div>
        </section>
    </div>
    <div class="wrapper-navbar">
        <nav>
            <div class="navbar-logo">
                <div class="wrapper-logo-footer">
                    <img src="./assets/icons/logo/logoDarkBlue.svg" alt="logo">
                    <p class="name">F. Puchta</p>
                    <span>Developer</span>
                </div>
            </div>
            <div class="navbar-menu font-size-26">
                <a href="#aboutSection">Why me</a>
                <a href="#skillSection">Skills</a>
                <a href="#projectSection">Projects</a>
                <a href="#contactSection">Contact</a>
            </div>
            <div class="navbar-language">
                <span onclick="displayContent('de')">DE</span>
                <p>EN</p>
            </div>
        </nav>
    </div>
    <main class="content-wrapper">
        <section id="aboutSection" class="sub-section mrg-tp-section">
            <h2 class="content-headlines">Why me</h2>
            <div class="content-section-body">
                <div class="content-about-left">
                    <div class="info-left">
                        <img class="location-icon" src="./assets/icons/about_me/locationIcon.png"
                            alt="location pin">
                        <img class="resp-location-icon" src="./assets/icons/about_me/locationResp.svg"
                            alt="location pin">
                        <p data-text="I live in Berlin.." class="font-size-30 typewriter">
                        </p>
                    </div>
                    <div class="info-left">
                        <img src="./assets/icons/about_me/remote.svg" alt=" laptop with wifi signal">
                        <p data-text="I am open to work remotely.." class="font-size-30 typewriter">
                        </p>
                    </div>
                </div>
                <div class="content-about-right">
                    <p class="font-size-18 line-height">I highly enjoy building software, it allows me to fully express
                        my
                        creativity.
                        Whether working in a team or on my own, my disciplined work ethic and structured approach enable
                        me to solve complex problems.
                        My social skills make me an excellent team player, and I remain capable of taking action even in
                        stressful or difficult situations.
                    </p>
                    <div class="write-me-btn">
                        <a href="#contactSection" class="btn font-size-18">Contact me</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="skillSection" class="sub-section mrg-tp-section">
            <h2 class="content-headlines">My Skills</h2>
            <div class="content-section-body">
                <div class="content-skills-left">
                    <img class="skill-icon-big" src="./assets/icons/skills/htmlBig.svg" alt="icon for html">
                    <img class="skill-icon-big" src="./assets/icons/skills/cssBig.svg" alt="icon for css">
                    <img class="skill-icon-big" src="./assets/icons/skills/jsBig.svg" alt="icon for java script">
                    <img class="skill-icon-big" src="./assets/icons/skills/apiBig.svg" alt="icon for an API">
                    <img class="skill-icon-big" src="./assets/icons/skills/firebaseBig.svg"
                        alt="icon for firebase storage">
                    <img class="skill-icon-big" src="./assets/icons/skills/gitBig.svg" alt="icon for gitHub">
                    <img class="skill-icon-big" src="./assets/icons/skills/scrumBig.svg" alt="icon for scrum">
                    <img class="skill-icon-small" src="./assets/icons/skills/htmlSmall.svg" alt="icon for html">
                    <img class="skill-icon-small" src="./assets/icons/skills/cssSmall.svg" alt="icon for css">
                    <img class="skill-icon-small" src="./assets/icons/skills/jsSmall.svg"
                        alt="icon for java script">
                    <img class="skill-icon-small" src="./assets/icons/skills/apiSmall.svg" alt="icon for an API">
                    <img class="skill-icon-small" src="./assets/icons/skills/firebaseSmall.svg"
                        alt="icon for firebase storage">
                    <img class="skill-icon-small" src="./assets/icons/skills/gitSmall.svg" alt="icon for gitHub">
                    <img class="skill-icon-small" src="./assets/icons/skills/scrumSmall.svg" alt="icon for scrum">
                </div>
                <div class="content-skills-right">
                    <p class="font-size-18">I am currently learning</p>
                    <div class="skills-learning">
                        <div class="new-skill">
                            <img src="./assets/icons/skills/angularSmall.svg" alt="icon for an angular">
                            <p>Angular</p>
                        </div>
                        <div class="new-skill">
                            <img src="./assets/icons/skills/typeScriptSmall.svg" alt="icon for an typescript">
                            <p>TypeScript</p>
                        </div>
                    </div>
                    <p>To keep up with modern web development approaches
                    </p>
                </div>
                <div class="content-skills-resp">
                    <p class="font-size-18 color-writing-blue">I am currently learning</p>
                    <div class="content-writing-resp">
                        <p class="div-space line-height">To keep up with modern web development approaches</p>
                        <div class="div-space skills-icons-resp">
                            <div class="new-skill">
                                <img src="./assets/icons/skills/angularSmall.svg" alt="icon for an angular">
                                <p>Angular</p>
                            </div>
                            <div class="new-skill">
                                <img src="./assets/icons/skills/typeScriptSmall.svg" alt="icon for an typescript">
                                <p>TypeScript</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="write-me-btn-resp">
                    <a href="#contactSection" class="btn-live font-size-18">Contact me</a>
                </div>
            </div>
        </section>
    </main>
    <section id="projectSection" class="sub-section mrg-tp-section">
        <h2 class="content-headlines">My Projects</h2>
        <div class="nav-projects" role="tablist">
            <button class="tab active" role="tab" id="tab-join" aria-selected="true" aria-controls="panel-join"
                tabindex="0"><span class="color-writing-blue font-size-30 desktop-content">1.
                    Join</span>
                <span class="color-writing-blue font-size-30 resp-content">1. Project</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-pollo" aria-selected="false"
                aria-controls="panel-pollo" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">2. Pollo Loco</span>
                <span class="color-writing-blue font-size-30 resp-content">2. Project</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-pokedex" aria-selected="false"
                aria-controls="panel-pokedex" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">3. Pokedex</span>
                <span class="color-writing-blue font-size-30 resp-content">3. Project</span>
            </button>
            <button class="tab color-writing-blue font-size-30" role="tab" id="tab-future" aria-selected="false"
                aria-controls="panel-future" tabindex="-1"><span
                    class="color-writing-blue font-size-30 desktop-content">4. Upcoming</span>
                <span class="color-writing-blue font-size-30 resp-content">4. Project</span>
            </button>
        </div>
        <div id="projectsContainer" class="card">
            <div class="content-wrapper-projects">
                <div class="panel active" data-panel="0" role="tabpanel" id="panel-join" aria-labelledby="tab-join"
                    aria-hidden="false">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/Join" class="btn" target="_blank"
                            rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    About the Project
                                    <span class="font-size-18 pr-duration">Duration: 5 Weeks</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    Join is a platform for organizing work.<br>
                                    Whether you're logged in or using it as a guest, you can create tasks, subtasks, and
                                    contacts. These can be sorted on the board according to various criteria.
                                    The overview provides a quick snapshot of the tasks ahead.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">How I have organised my work process</h3>
                                <p class="font-size-18 line-height">
                                    Using tools like Trello and GitHub, my colleagues and I divided up the tasks.
                                    Working in different branches was particularly important in this process. By
                                    assigning tasks individually, maintaining a consistent review process for all
                                    developments, and communicating effectively via Discord,
                                    we were able to establish a structured and goal-oriented workflow.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">My group work experience</h3>
                                <p class="font-size-18 line-height">
                                    Thanks to my great colleagues, this project went off without a hitch. Through this
                                    work, I deepened my understanding of how to work in a structured way using Git
                                    branches. <br> Learning something new and being open to other people's opinions and
                                    approaches is important in any group project.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologies</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Join</h3>
                                <p>Technologies: HTML, CSS, JavaScript</p>
                                <p>Duration: 5 Weeks</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/joinScreen.png" alt="screenshot of the project 'join'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/Join" class="btn" target="_blank"
                                rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="1" role="tabpanel" id="panel-pollo" aria-labelledby="tab-pollo"
                    aria-hidden="true">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/el_pollo_loco" target="_blank" rel="noopener noreferrer"
                            class="btn">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    About the Project
                                    <span class="font-size-18 pr-duration">Duration: 3 Weeks</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    A classic Jump & Run game.<br>
                                    You control Pepe, collect coins and bottles to fight chickens.
                                    At the end of the level, the final boss awaits you.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">How I have organised my work process</h3>
                                <p class="font-size-18 line-height">
                                    Thanks to a well-thought-out approach and the division of the project into
                                    individual sections, combined with meaningful commits,
                                    I was able to successfully complete this project.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">What I have learnt</h3>
                                <p class="font-size-18 line-height">
                                    The new features here were object-oriented programming with classes in JavaScript
                                    and the rendering of graphics on an HTML canvas. <br>
                                    Extensive work with intervals was also a key focus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologies</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Pollo Loco</h3>
                                <p>Technologies: HTML, CSS, JavaScript</p>
                                <p>Duration: 3 Weeks</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/polloScreen.png" alt="screenshot of the project 'el pollo loco'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/el_pollo_loco" target="_blank"
                                rel="noopener noreferrer" class="btn">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="2" role="tabpanel" id="panel-pokedex" aria-labelledby="tab-pokedex"
                    aria-hidden="true">
                    <div class="project-btns-resp">
                        <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                        <a href="https://github.com/FabianP95/pokedex" class="btn" target="_blank"
                            rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    About the Project
                                    <span class="font-size-18 pr-duration">Duration: 4 Weeks</span>
                                </h3>
                                <p class="font-size-18 line-height">
                                    The Pokédex is a collection of all Pokémon, based on the familiar format from the
                                    games. <br>
                                    The Pokémon are displayed on a card with images and various stats, sorted by their
                                    number.
                                    This provides users with a comprehensive overview of each Pokémon.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">How I have organised my work process</h3>
                                <p class="font-size-18 line-height">
                                    Using Trello, I was able to successfully complete this project.
                                </p>
                            </div>
                        </div>
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">What I have learnt</h3>
                                <p class="font-size-18 line-height">
                                    Through this project, I learned how to work with APIs and JSON objects. <br>
                                    I also gained a deeper understanding of how to use HTML templates to display the
                                    Pokémon.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologies</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/htmlSmall.svg" alt="html icon">
                                <img src="./assets/icons/skills/cssSmall.svg" alt="css icon">
                                <img src="./assets/icons/skills/jsSmall.svg" alt="javascript icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Pokedex</h3>
                                <p>Technologies: Firebase, CSS, JavaScript, HTML</p>
                                <p>Duration: 4 Weeks</p>
                            </div>
                        </div>
                        <div class="screenshot-project">
                            <img src="./assets/img/pokeScreen.png" alt="screenshot of the project 'el pollo loco'">
                        </div>
                        <div class="project-btns">
                            <a href="" class="btn-live" target="_blank" rel="noopener noreferrer">Live Test</a>
                            <a href="https://github.com/FabianP95/pokedex" class="btn" target="_blank"
                                rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div class="panel" data-panel="3" role="tabpanel" id="panel-future" aria-labelledby="tab-future"
                    aria-hidden="true">
                    <div class="pr-card-left">
                        <div class="pr-section">
                            <img src="./assets/icons/bulletPoint.svg" alt="bulletpoint graphic">
                            <div>
                                <h3 class="pr-title">
                                    About the Project
                                </h3>
                                <p class="font-size-18 line-height">
                                    In future projects, I would like to expand my skills in software development. My
                                    focus will be on working with and developing
                                    using Angular and TypeScript.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="pr-right ">
                        <div class="sub-section pr-tech">
                            <p class="font-size-18">Technologies</p>
                            <div class="tech-icon-row">
                                <img src="./assets/icons/skills/typeScriptSmall.svg" alt="typescript icon">
                                <img src="./assets/icons/skills/angularSmall.svg" alt="angular icon">
                            </div>
                        </div>
                        <div class="pr-section">
                            <div class="pr-header-resp">
                                <h3 class="pr-title-resp">Upcoming projects</h3>
                                <p>Technologies: TypeScript, Angular, HTML, CSS, JavaScript</p>
                            </div>
                        </div>
                        <div class="future-project">
                            <span>Coming soon...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sub-section mrg-tp-section">
        <div>
            <p class="team-title">Need a team player?<span class="team-title-sub"> Here's what my colleagues say about
                    me</span></p>
        </div>
        <div class="quote-section">
            <article class="single-quote">
                <h4 class="font-size-26 margin-team">Gerd Lödige</h4>
                <p class="font-size-18 margin-team">Project <span class="color-writing-blue font-size-18 ">Join</span>
                </p>
                <p class="font-size-18 margin-team">"Fabian's dedication, determination, and
                    attention to detail make him an invaluable asset to any project."</p>
                <a class="single-link margin-team-link" href="https://www.linkedin.com/in/gerd-l%C3%B6dige-4a08802a9/"
                    target="_blank" rel="noopener noreferrer">LinkedIn Profil</a>
            </article>
            <article class="single-quote mrg-left">
                <h4 class="font-size-26 margin-team">Max L.</h4>
                <p class="font-size-18 margin-team">Project <span class="color-writing-blue font-size-18 ">Join</span>
                </p>
                <p class="font-size-18 margin-team">"I would like to thank Fabian for his cooperation. It was a pleasure
                    working with him, and I wish him all the best in the future."</p>
                <a class="single-link margin-team-link" href="https://www.linkedin.com/in/lukas-lehmann-b7b5683bb/"
                    target="_blank" rel="noopener noreferrer">LinkedIn
                    Profil</a>
            </article>
        </div>
    </section>
    <section id="contactSection" class="contact-section">
        <div class="sub-section mrg-tp-section">
            <h2 class="content-headlines">Contact me</h2>
            <div class="content-contact-body">
                <p class="content-contact-left font-size-18">
                    Please feel free to contact me if you're interested in my projects or would like to discuss
                    professional collaboration.
                    You can reach me by email or phone.<br>
                    I look forward to hearing from you!
                </p>
                <div class="content-contact-right">
                    <a class="contact-section-mail font-size-20" href="mailto:fabian.puchta@fabian-puchta.de">E-Mail:
                        fabian.puchta@fabian-puchta.de</a>
                    <a href="tel:+4915124181798" class="contact-section-phone font-size-20">Phone: 015124181798</a>
                </div>
            </div>
            <div class="form-wrapper">
                <form id="form">
                    <div class="row-name-mail">
                        <div id="nameContainer" class="input-wrapper">
                            <label for="formName" id="formLabelName">Your name <span class="error-message d-none">is
                                    required
                                </span></label>
                            <div class="input-field">
                                <input type="text" name="name" id="formName" aria-required="true">
                            </div>
                            <span id="formNameError" class="error-message d-none">is required</span>
                        </div>
                        <div id="mailContainer" class="input-wrapper">
                            <label for="formMail" id="formLabelMail">Your Email<span class="error-message d-none">must
                                    be valid
                                </span></label>
                            <div class="input-field">
                                <input type="email" name="mail" id="formMail" aria-required="true">
                            </div>
                        </div>
                    </div>
                    <div id="messageContainer" class="input-wrapper width-100">
                        <label for="formMessage" id="formLabelMessage">Your Message <span class="error-message d-none">
                                must be at least 10 characters long</span></label>
                        <div class="input-field">
                            <textarea name="message" id="formMessage" rows="10" aria-required="true"></textarea>
                        </div>
                    </div>
                    <div class="contact-accept-section">
                        <div>
                            <div class="accept-policy-wrapper">
                                <label for="accept" class="checkbox-wrapper" id="checkbox">
                                    <input onchange="setPrivacySwitch()" class="d-none" type="checkbox" id="accept"
                                        value="accepted" aria-required="true" aria-describedby="errorPolicy">
                                    <div class="checkbox-icon">
                                        <img src="./assets/icons/contact/checkBox.svg" class="icon-default"
                                            alt="checkbox icon in default state" aria-hidden="true">
                                        <img src="./assets/icons/contact/checkBoxHover.svg"
                                            class="icon-hover d-none" alt="checkbox icon in hover state"
                                            aria-hidden="true">
                                        <img src="./assets/icons/contact/checkBoxChecked.svg"
                                            class="icon-checked d-none" alt="checkbox icon in accepted state"
                                            aria-hidden="true">
                                    </div>
                                    <div class="checkbox-error d-none">
                                        <img src="./assets/icons/contact/checkBoxMissing.svg" class="icon-error"
                                            alt="checkbox icon in missing state" aria-hidden="true">
                                    </div>
                                </label>
                                <p id="acceptPolicyText">I've read the <a
                                        href="./html/english/privacy_policy.html">privacy policy
                                    </a> and agree to the processing of my data as outlined.</p>
                            </div>
                            <span class="error-message vis-hidden" id="errorPolicy">Please accept the privacy
                                policy.</span>
                        </div>
                    </div>
                    <div class="send-btn-pos">
                        <button class="btn" type="button" id="sendBtn" disabled aria-disabled="true">Send</button>
                    </div>
                </form>
                <div class="response-window" id="responseContainer" role="alert" aria-live="polite" aria-hidden="true">
                    <div class="response-content">
                        <p id="responseMessage">Ihre Nachricht wurde erfolgreich an mich geschickt. Vielen Dank!</p>
                    </div>
                </div>
            </div>
        </div>
        <aside class="wrapper-arrow-up">
            <a href="#hero" class="swap-image">
                <img src="./assets/icons/hero_section/arrowUpHover.svg" class="image-hover"
                    alt="arrow pointing upward in hovered state">
                <img src="./assets/icons/hero_section/arrowUp.svg" class="image-default"
                    alt="arrow pointing upward">
            </a>
        </aside>
    </section>
    <footer class="wrapper-footer">
        <div class="content-wrapper-footer">
            <div class="footer-legal">
                <a href="./html/english/legal_notice.html">Imprint</a>
                <a href="./html/english/privacy_policy.html">Privacy Policy</a>
                <p>&copy;Fabian Puchta 2026</p>
            </div>
            <div class="wrapper-logo-footer">
                <img src="./assets/icons/logo/logoDarkBlue.svg" alt="logo">
                <p class="name">F. Puchta</p>
                <span>Developer</span>
            </div>
            <div class="wrapper-social-media-footer">
                <a href="https://github.com/FabianP95" target="_blank" rel="noopener noreferrer" class="swap-image"
                    aria-label="GitHub profile">
                    <img src="./assets/icons/contact/githubFooter.svg" alt="" class="image-default"
                        aria-hidden="true">
                    <img src="./assets/icons/contact/gitHoverFooter.svg" class="image-hover" alt=""
                        aria-hidden="true">
                </a>
                <a href="mailto:fabian.puchta@fabian-puchta.de" target="_blank" rel="noopener noreferrer"
                    class="swap-image" aria-label="Email contact">
                    <img src="./assets/icons/contact/mailFooter.svg" alt="" class="image-default"
                        aria-hidden="true">
                    <img src="./assets/icons/contact/mailHoverFooter.svg" class="image-hover" alt=""
                        aria-hidden="true">
                </a>
                <a href="https://www.linkedin.com/in/fabian-puchta-7ba7383b7/" target="_blank" rel="noopener noreferrer"
                    class="swap-image" aria-label="LinkedIn profile">
                    <img src="./assets/icons/contact/linkedInFooter.svg" alt="" class="image-default"
                        aria-hidden="true">
                    <img src="./assets/icons/contact/linkedInHoverFooter.svg" class="image-hover" alt=""
                        aria-hidden="true">
                </a>
            </div>
        </div>
    </footer>`;
    }
}