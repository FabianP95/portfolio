const formName = document.getElementById('formName');
const nameLabel = document.getElementById('formLabelName');
const formMail = document.getElementById('formMail');
const mailLabel = document.getElementById('formLabelMail');
const formMesssage = document.getElementById('formMessage');
const messageLabel = document.getElementById('formLabelMessage');
const form = document.getElementById('form');
const privacyCheckbox = document.getElementById('checkbox');
const sendBtn = document.getElementById('sendBtn');
const answer = document.getElementById('responseContainer');
const answerText = document.getElementById('responseMessage');

let sending = false;
let privacyAccepted = false;

addEventListeners()

sendBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    activateHint()
    if (sending) {
        disableBtn()
        try {
            const response = await postMail();
            await handleResponse(response);
        } catch (error) {
            handleResponseError(error);
        } finally {
            activateBtn();
        }
    }
});

async function handleResponse(response) {
    const result = await response.json();
    if (response.ok && result.success) {
        hideForm();
        resetCheckbox();
        showAnswer();
    } else {
        alert('Error: ' + (result.error || 'Failed to send message.'));
    }
}

function handleResponseError() {
    hideForm();
    resetCheckbox();
    showFailedAnswer();
}

function showFailedAnswer() {
    answerText.innerText = "Ihre Nachricht konnte leider nicht verschickt werden.";
    answer.classList.add('activeResponse');
    setTimeout(() => {
        answer.classList.remove('activeResponse');
        showForm();
    }, 2000);
}

function hideForm() {
    form.classList.add('vis-hidden');
    sending = false;
    emptiesInputs();
}

function showForm() {
    form.classList.remove('vis-hidden');
}

function showAnswer() {
    answer.classList.add('response-window.active');
    setTimeout(() => {
        answer.classList.remove('response-window.active');
    }, 200);

}

function disableBtn() {
    sendBtn.disabled = true;
}

function activateBtn() {
    sendBtn.disabled = false;
}

function addEventListeners() {
    addFocusListener();
    addBlurListener();
}

async function postMail() {
    const contactData = getDataFromForm();
    const response = await fetch('/send_mail.php', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
}

function getDataFromForm() {
    const formData = new FormData(form);
    return {
        name: formData.get('name'),
        email: formData.get('mail'),
        message: formData.get('message')
    };
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

function resetCheckbox() {
    privacyAccepted = false;
    privacyCheckbox.querySelector('.checkbox-icon').classList.remove('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.add('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.add('d-none');
    document.getElementById('errorPolicy').classList.add('vis-hidden');
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
        case validateName(formName.value):
            highlightError('nameContainer');
            sending = false;
            break;
        case validateEmail(formMail.value):
            highlightError('mailContainer');
            sending = false;
            break;
        case validateMessageLength(formMesssage.value):
            highlightError('messageContainer');
            sending = false;
            break;
        case privacyAccepted:
            hintOnPrivacy();
            sending = false;
            break;
        default: sending = true;
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