let passwordLenght = document.getElementById('passwordLenght');
let password = document.getElementById('password');
let saveButton = document.getElementById('saveButton');

function generatePassword(len) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeric = '0123456789';
    const symbol = "!@#$%^&*()_+=}{[]:;'?/>.<,`";
    const data = lowerAlphabet + upperAlphabet + numeric + symbol;

    let generator = '';
    for(let i = 0; i < len; i++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLenght.value);
    password.value = newPassword;
    setTimeout(() => {
        alert(`Password has been generated!`);
    }, 500);
}

function savePassword() {
    document.title = password.value;
    saveButton.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Password saya: ${document.title}`));
    saveButton.setAttribute(`Download`, 'MyPasswordGeneratorLOG.txt');
    setTimeout(() => {
        alert('Berhasil disimpan');
    }, 500)
}