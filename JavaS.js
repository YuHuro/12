const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const nameInput = document.querySelector('#name-input');
const mailInput = document.querySelector('#mail-input')
const numInput = document.querySelector('#num-input')
const confirmForm = document.querySelector('#confirm-form')

function checkName() {
    var tempName = nameInput.value.trim();
    if (tempName.length < 2) {
        nameInput.style.borderColor = 'red';
    } else {
        nameInput.style.borderColor = 'green';
    }
}
function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(mailInput.value)) {
		mailInput.style.borderColor = 'green';
	} else {
		mailInput.style.borderColor = 'red';
	}
}

function formatAndValidateRussianPhoneNumber() {
    var phoneNumberInput = numInput;
    var phoneNumber = phoneNumberInput.value;
    var cleanedNumber = phoneNumber.replace(/\D/g, '');
    var formattedNumber = `+7 (${cleanedNumber.substring(1, 4)}) ${cleanedNumber.substring(4, 7)}-${cleanedNumber.substring(7, 9)}-${cleanedNumber.substring(9, 11)}`;
    phoneNumberInput.value = formattedNumber;
    var phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

    if (phonePattern.test(formattedNumber)) {
        phoneNumberInput.style.borderColor = 'green';
        return true;
    } else {
        phoneNumberInput.style.borderColor = 'red';
        return false;
    }
}
numInput.addEventListener('blur', formatAndValidateRussianPhoneNumber);
numInput.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

nameInput.addEventListener('input', checkName)
mailInput.addEventListener('input', onInput)
