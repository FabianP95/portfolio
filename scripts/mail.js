let formName;
let nameLabel;
let formMail;
let mailLabel;
let formMesssage;
let messageLabel;
let form;
let privacyCheckbox;
let sendBtn;
let answer;
let answerText;

let sending = false;
let privacyAccepted = false;

/**
 * Initializes form element references and attaches send button listener
 * @returns {void}
 */
function initializeFormElements() {
    formName = document.getElementById('formName');
    nameLabel = document.getElementById('formLabelName');
    formMail = document.getElementById('formMail');
    mailLabel = document.getElementById('formLabelMail');
    formMesssage = document.getElementById('formMessage');
    messageLabel = document.getElementById('formLabelMessage');
    form = document.getElementById('form');
    privacyCheckbox = document.getElementById('checkbox');
    sendBtn = document.getElementById('sendBtn');
    answer = document.getElementById('responseContainer');
    answerText = document.getElementById('responseMessage');
}

if (sendBtn) {
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
}

if (privacyCheckbox) {
    privacyCheckbox.addEventListener('click', () => {
        setPrivacySwitch();
    });
}

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
        hideForm();
        showFailedAnswer();
        resetCheckbox();
    }
}

/**
 * Handles errors when sending the email fails
 * @param {Error} error - The error object
 */
function handleResponseError(error) {
    hideForm();
    resetCheckbox();
    showFailedAnswer();
}

/**
 * Displays a failure message when the email could not be sent
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
 * Hides the contact form and prevents further submission
 */
function hideForm() {
    form.classList.add('vis-hidden');
    sending = false;
    emptiesInputs();
}

/**
 * Shows the contact form
 */
function showForm() {
    form.classList.remove('vis-hidden');
}

/**
 * Displays a success message after the email is sent
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
 */
function disableBtn() {
    sendBtn.disabled = true;
}

/**
 * Enables the send button
 */
function activateBtn() {
    sendBtn.disabled = false;
}

/**
 * Adds all event listeners to form inputs
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
 */
function checkBtnActivation() {
    if (allInputCheck() && privacyAccepted == true) {
        sendBtn.disabled = false;
    } else {
        sendBtn.disabled = true;
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
 */
function hintOnPrivacy() {
    privacyCheckbox.querySelector('.checkbox-icon').classList.add('d-none');
    privacyCheckbox.querySelector('.checkbox-error').classList.remove('d-none');
    document.getElementById('errorPolicy').classList.remove('vis-hidden');
}

/**
 * Empties input fields after the message has successfully been sent
 */
function emptiesInputs() {
    formName.value = "";
    formMail.value = "";
    formMesssage.value = "";
}

/**
 * Validates entered email
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Validates entered name
 */
function validateName(str) {
    return /^[a-zA-Z]+( [a-zA-Z]+)*$/.test(str);
}

/**
 * Validates message length (minimum 10 characters excluding whitespace)
 */
function validateMessageLength(str) {
    return str.replace(/\s/g, '').length > 10;
}