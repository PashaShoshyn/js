const ol = document.getElementById('ol');
const p = document.createElement('ol');
p.textContent = 'hello, World!';
ol.before('before');
p.textContent = 'hello, JavaScript!';
ol.after(p1);



function createProductCard(name, description, price) {
    const productMarkup = `
        <article class="product">
            <h2 class="product__name">${name}</h2>
            <p class="product__descr">${description}</p>
            <p class="product__price">Ціна: ${price} кредитів</p>
        </article>
    `;
    
    document.querySelector(".js-products").insertAdjacentHTML("beforeend", productMarkup);
}


createProductCard("Смартфон", "Сучасний смартфон з OLED дисплеєм", 15000);
createProductCard("Ноутбук", "Потужний ноутбук для роботи та ігор", 35000);
