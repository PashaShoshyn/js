let cost;
const subscription = 'premium';
switch (subscription) {
    case 'free':
        cost = 0;
        break;
    case 'pro':
        cost = 100;
        break;
    case 'premium':
        cost = 500;
        break;
    default:
        console.log('Invalid subscription type');
}
console.log(cost); // 500

document.getElementById('checkBrowser').addEventListener('click', function () {

    const browser = document.getElementById('browser').value;
    const p = document.getElementById('message');

//     if (browser === 'Edge') {
//         p.textContent = 'Ми ще не підтримуємо цей браузер'
//     } else if (browser == 'Chrome' ||
//         browser == 'Mozila' ||
//         browser == 'Opera' ||
//         browser == 'Safari') {
//         p.textContent = "Ми підтримуємо цей браузер!";
//     } else {
//         p.textContent = "Ми сподіваємося що все буде ок";
//     }

//     switch (browser) {
//         case "Edge": 
//                 p.textContent = "Ми ще не підтримуємо цей браузер";
//             break;
//         case "Chrome" || "Mozila" || "Opera" || "Safari"
//                };
// });

switch(browser) {
    case "Edge":
        p.textContent = "Ми ще не підтримуємо цей браузер";
        break;
    case "Chrome" :
        p.textContent = "Ми підтримуємо цей браузер";
        break;
    case "Mozilla" :
        p.textContent = "Ми підтримуємо цей браузер";
        break;
    case "Opera" :
        p.textContent = "Ми підтримуємо цей браузер";
        break;
    case "Safari" :
        p.textContent = "Ми підтримуємо цей браузер";
        break;
    default : p.textContent =
           "Ми незнаємо що це за чудо, використовуй нормальний браузер";
        
}});

function displayResult() {
    let a = parseInt(document.getElementById('inputValue').value);
    let p = document.getElementById('output');

    switch (a) {
        case 0:
            p.textContent = "0";
            break;
        case 1:
            p.textContent = "1";
            break;
        case 2:
        case 3:
            p.textContent = "2,3";
            break;
        default:
            p.textContent = "Значення не підтримується";
    }
}

