const nameInput = document.querySelector('#name-input');
const mailInput = document.querySelector('#mail-input')
const numInput = document.querySelector('#num-input')
const confirmForm = document.querySelector('#confirm-form')

function checkName(ev){
    ev.preventDefautlt()
    var tempName = nameInput.value;
    if(tempName.length < 2){
        nameInput.style.borderColor = 'red'
    }
}
confirmForm.addEventListener('click', checkName)
