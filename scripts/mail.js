/* body for mail object: email, name, message */
const formName = document.getElementById('formName');
const nameLabel = document.getElementById('formLabelName');
const formMail = document.getElementById('formMail');
const mailLabel = document.getElementById('formLabelMail');
const formMesssage = document.getElementById('formMessage');
const messageLabel = document.getElementById('formLabelMessage');
const form = document.getElementById('form');
const privacyCheckbox = document.getElementById('checkbox');

const sendBtn = document.getElementById('sendBtn');

let privacyAccepted = false;

addEventListeners()

function addEventListeners() {
    addFocusListener();
    addBlurListener();
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();

        activateHint()


    });
}


function addFocusListener() {
    formName.addEventListener("focus", (e) => {
        resetHighlight('nameContainer');
    });
    formMail.addEventListener("focus", (e) => {
        resetHighlight('mailContainer');
    });
    formMesssage.addEventListener("focus", (e) => {
        resetHighlight('messageContainer');
    });
}

function addBlurListener() {
    formName.addEventListener("blur", (e) => {
        checkName(formName.value);
        checkBtnActivation();
    });
    formMail.addEventListener("blur", (e) => {
        checkMail(formMail.value);
        checkBtnActivation();
    });
    formMesssage.addEventListener("blur", (e) => {
        checkMessage(formMesssage.value);
        checkBtnActivation();
    });
}

function checkName(name) {
    switch (validateName(name)) {
        case false:
            highlightError('nameContainer');
            break;
    }
}

function checkMail(mail) {
    switch (validateEmail(mail)) {
        case false:
            highlightError('mailContainer');
            break;
    }
}

function checkMessage(msg) {
    switch (validateMessageLength(msg)) {
        case false:
            highlightError('messageContainer');
            break;
    }
}

function highlightError(idContainer) {
    let container = document.getElementById(idContainer);
    container.querySelector('span').classList.remove('d-none');
    container.querySelector('label').classList.add('font-color-red');
    if (idContainer === 'messageContainer') {
        container.querySelector('textarea').classList.add('border-red');
    } else {
        container.querySelector('input').classList.add('border-red');
    }
}

function resetHighlight(idContainer) {
    let container = document.getElementById(idContainer);
    container.querySelector('span').classList.add('d-none');
    container.querySelector('label').classList.remove('font-color-red');
    if (idContainer === 'messageContainer') {
        container.querySelector('textarea').classList.remove('border-red');
    } else {
        container.querySelector('input').classList.remove('border-red');
    }
}

function setPrivacySwitch() {
    switch (privacyAccepted) {
        case true:
            privacyAccepted = false;
            break;
        case false:
            privacyAccepted = true;
            break;
    }
    privacyCheckbox.querySelector('.checkbox-icon').classList.remove('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.add('d-none');
    document.getElementById('errorPolicy').classList.add('vis-hidden');
    checkBtnActivation();
}

function checkBtnActivation() {
    if (allInputCheck() && privacyAccepted == true) {
        sendBtn.classList.remove('btn-disabled');
        sendBtn.classList.add('btn');
    } else {
        sendBtn.classList.add('btn-disabled');
        sendBtn.classList.remove('btn');
    }
}

function allInputCheck() {
    return validateName(formName.value) && validateEmail(formMail.value) && validateMessageLength(formMesssage.value);
}

function activateHint() {
    switch (false) {
        case privacyAccepted:
            hintOnPrivacy()
            break;
        case validateName(formName.value):
            highlightError('nameContainer');
            break;
        case validateEmail(formMail.value):
            highlightError('mailContainer');
            break;
        case validateMessageLength(formMesssage.value):
            highlightError('messageContainer');
            break;
    }

}

function hintOnPrivacy() {
    privacyCheckbox.querySelector('.checkbox-icon').classList.add('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.remove('d-none');
    document.getElementById('errorPolicy').classList.remove('vis-hidden');
}



/**
 * empties input fields after the message has successfully been send
 */
function emptiesInputs() {
    formName.value = "";
    formMail.value = "";
    formMesssage.value = "";
}

/**
 * validates entered email
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * validates entered name
 */
function validateName(str) {
    return /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(str);
}

/**
 * validates message length
 */
function validateMessageLength(str) {
    return str.replace(/\s/g, '').length > 10;
}