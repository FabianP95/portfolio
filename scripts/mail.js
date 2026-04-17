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
            console.log(response);

            await handleResponse(response);
        } catch (error) {
            handleResponseError(error);
        } finally {
            activateBtn();
        }
    }
});

/**
 * Handles the server response after sending the email
 * @param {Response} response - The fetch response object
 * @returns {Promise<void>}
 */
async function handleResponse(response) {
    const result = await response.json();
    if (response.ok && result.success) {
        hideForm();
        showAnswer();
        resetCheckbox();
    } else {
        alert('Error: ' + (result.error || 'Failed to send message.'));
    }
}

/**
 * Handles errors when sending the email fails
 * @param {Error} error - The error object
 * @returns {void}
 */
function handleResponseError(error) {
    console.log(error);

    hideForm();
    resetCheckbox();
    showFailedAnswer();
}

/**
 * Displays a failure message when the email could not be sent
 * @returns {void}
 */
function showFailedAnswer() {
    answerText.innerText = "Ihre Nachricht konnte leider nicht verschickt werden.";
    answer.classList.add('activeResponse');
    setTimeout(() => {
        answer.classList.remove('activeResponse');
        showForm();
    }, 2000);
}

/**
 * Hides the contact form
 * @returns {void}
 */
function hideForm() {
    form.classList.add('vis-hidden');
    sending = false;
    emptiesInputs();
}

/**
 * Shows the contact form
 * @returns {void}
 */
function showForm() {
    form.classList.remove('vis-hidden');
}

/**
 * Displays a success message after the email is sent
 * @returns {void}
 */
function showAnswer() {
    answerText.innerText = "Vielen Dank für Ihre Nachricht";
    answer.classList.add('activeResponse');
    setTimeout(() => {
        answer.classList.remove('activeResponse');
        showForm();
    }, 2000);

}

/**
 * Disables the send button
 * @returns {void}
 */
function disableBtn() {
    sendBtn.disabled = true;
}

/**
 * Enables the send button
 * @returns {void}
 */
function activateBtn() {
    sendBtn.disabled = false;
}

/**
 * Adds all event listeners to form inputs
 * @returns {void}
 */
function addEventListeners() {
    addFocusListener();
    addBlurListener();
}

/**
 * Sends the contact form data to the server via POST request
 * @returns {Promise<Response>} The fetch response
 */
async function postMail() {
    const contactData = getDataFromForm();
    const response = await fetch('./send_mail.php', {
        method: 'POST',
        body: JSON.stringify(contactData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response;
}

/**
 * Extracts form data and returns it as an object
 * @returns {Object} Object containing name, email, and message
 */
function getDataFromForm() {
    const formData = new FormData(form);
    return {
        name: formData.get('name'),
        email: formData.get('mail'),
        message: formData.get('message')
    };
}


/**
 * Adds focus event listeners to form inputs to reset highlights
 * @returns {void}
 */
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

/**
 * Adds blur event listeners to form inputs to validate inputs
 * @returns {void}
 */
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

/**
 * Validates the name input and highlights errors if invalid
 * @param {string} name - The name value to validate
 * @returns {void}
 */
function checkName(name) {
    switch (validateName(name)) {
        case false:
            highlightError('nameContainer');
            break;
    }
}

/**
 * Validates the email input and highlights errors if invalid
 * @param {string} mail - The email value to validate
 * @returns {void}
 */
function checkMail(mail) {
    switch (validateEmail(mail)) {
        case false:
            highlightError('mailContainer');
            break;
    }
}

/**
 * Validates the message input and highlights errors if invalid
 * @param {string} msg - The message value to validate
 * @returns {void}
 */
function checkMessage(msg) {
    switch (validateMessageLength(msg)) {
        case false:
            highlightError('messageContainer');
            break;
    }
}

/**
 * Highlights a form field with error styling
 * @param {string} idContainer - The ID of the container to highlight
 * @returns {void}
 */
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

/**
 * Removes error highlighting from a form field
 * @param {string} idContainer - The ID of the container to reset
 * @returns {void}
 */
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

/**
 * Resets the privacy policy checkbox to unchecked state
 * @returns {void}
 */
function resetCheckbox() {
    privacyAccepted = false;
    privacyCheckbox.querySelector('.checkbox-wrapper input').checked = false;
    privacyCheckbox.querySelector('.checkbox-icon').classList.remove('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.add('d-none');
    document.getElementById('errorPolicy').classList.add('vis-hidden');
}

/**
 * Toggles the privacy policy acceptance state
 * @returns {void}
 */
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

/**
 * Checks if all form inputs are valid and enables/disables the send button accordingly
 * @returns {void}
 */
function checkBtnActivation() {
    if (allInputCheck() && privacyAccepted == true) {
        sendBtn.classList.remove('btn-disabled');
        sendBtn.classList.add('btn');
    } else {
        sendBtn.classList.add('btn-disabled');
        sendBtn.classList.remove('btn');
    }
}

/**
 * Validates all form inputs
 * @returns {boolean} True if all inputs are valid, false otherwise
 */
function allInputCheck() {
    return validateName(formName.value) && validateEmail(formMail.value) && validateMessageLength(formMesssage.value);
}

/**
 * Validates all inputs and displays hints for any validation errors
 * @returns {void}
 */
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

/**
 * Displays an error hint for the privacy policy checkbox
 * @returns {void}
 */
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