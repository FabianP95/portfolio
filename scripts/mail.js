/* body for mail object: email, name, message */
const formName = document.getElementById('formName');
const nameLabel = document.getElementById('formLabelName');
const formMail = document.getElementById('formMail');
const mailLabel = document.getElementById('formLabelMail');
const formMesssage = document.getElementById('formMessage');
const messageLabel = document.getElementById('formLabelMessage');

addInputEventListeners()

function addInputEventListeners() {
    addFocusListener();
    addBlurListener();
}


function addFocusListener() {
    formName.addEventListener("focus", (e) => {
        console.log("hi");

    });
    formMail.addEventListener("focus", (e) => {
        console.log("hi");
    });
    formMesssage.addEventListener("focus", (e) => {
        console.log("hi");
    });
}

function addBlurListener() {
    formName.addEventListener("blur", (e) => {
        console.log("Bye");
    });
    formMail.addEventListener("blur", (e) => {
        console.log("Bye");
    });
    formMesssage.addEventListener("blur", (e) => {
        console.log("Bye");
    });
}

/**
 * empties input fields after the message has successfully been send
 */
function emptiesInputs() {
    formName.value = "";
    formMail.value = "";
    formMesssage.value = "";
}


function validateInputs(user, hintKeys) {
    let valid = true;
    if (formName.value.length <= 3 || !validateName(formName.value)) {
        displayHint(hintKeys.name);
        valid = false;
    }
    if (!validateEmail(user.email) || user.email === "") {
        displayHint(hintKeys.email);
        valid = false;
    }

    return valid;
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