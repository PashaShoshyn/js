
function checkTextFields() {
    const text1 = document.getElementById('text1').value.trim();
    const text2 = document.getElementById('text2').value.trim();
    const output1 = document.getElementById('output1');
    if (text1 && text2) {
        output1.textContent = "Обидва поля заповнені";
    } else {
        output1.textContent = "Не всі поля заповнені";
    }
}

function checkSum() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const output2 = document.getElementById('output2');
    if (number1 + number2 > 10) {
        output2.textContent = "Сума більша за 10";
    } else {
        output2.textContent = "Сума менша або дорівнює 10";
    }
}

function checkForJavaScript() {
    const text3 = document.getElementById('text3').value.trim();
    const output3 = document.getElementById('output3');
    if (text3.includes("JavaScript")) {
        output3.textContent = "Текст містить слово JavaScript";
    } else {
        output3.textContent = "Текст не містить слово JavaScript";
    }
}

function checkRange() {
    const rangeNumber = parseFloat(document.getElementById('rangeNumber').value) || 0;
    const output4 = document.getElementById('output4');
    if (rangeNumber > 10 && rangeNumber < 20) {
        output4.textContent = "Число входить в діапазон від 10 до 20";
    } else {
        output4.textContent = "Число не входить в діапазон від 10 до 20";
    }
}

function validateAndRedirect() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const output5 = document.getElementById('output5');

    const isNameValid = name.length >= 3;
    const isEmailValid = email.includes('@') && email.lastIndexOf('.') > email.indexOf('@');
    const isPasswordValid = password.length >= 6;

    if (isNameValid && isEmailValid && isPasswordValid) {
        output5.textContent = "";
        alert("Дані коректні, перенаправляємо...");
        window.location.href = "https://example.com";
    } else {
        output5.textContent = "Помилка: перевірте заповнені дані!";
    }
}

