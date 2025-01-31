const text1 = document.getElementById('text');
document.querySelector('.hide-text-btn').addEventListener('click', () => {
    // text1.style.display = 'none';
    // text1hidden = true;
});


document.querySelector('show-text-btn').addEventListener('click', () => {
   text1.hidden = false;
});

document.querySelector('.change-value-bth').addEventListener('click', () => {
    const input = prompt('Введіть нове значення')
    document.getElementById('input').value = input;
});





// const navList = document.querySelector('.site-nav');


// navList.style.backgroundColor = 'yellow';


// const firstLink = navList.querySelector('a');
// firstLink.classList.add('site-nav__link');

// const portfolioLink = navList.querySelector('a[href="https://"]');
// if (portfolioLink) {
//     portfolioLink.style.fontSize = '20px'; 
// }








const heading = document.querySelector('h1');
heading.textContent = 'Список посилань';
heading.classList.add('custom-heading'); 

heading.classList.replace('custom-heading', 'new-heading');


const links = document.querySelectorAll('ul li a');


const isExternal = (link) => link.href.startsWith('http') && !link.href.includes(location.hostname);


links.forEach(link => {
    if (isExternal(link)) {
        link.style.color = 'orange';
    }
});

if (links.length > 0) {
    links[0].classList.add('first-link');
    links[links.length - 1].classList.add('last-link');
}


links.forEach(link => {
    if (link.classList.contains('list')) {
        console.log('Є посилання з класом "list"');
    }
});
