const body = document.body
const container = document.createElement("div")
function Prog() {
 
const niga = document.createElement("div")
const hello = document.createElement("div")
const h1 = document.createElement("h1")
const p = document.createElement("p")
const niga_box = document.createElement("div")


container.classList.add('container')
niga.classList.add('niga')
hello.classList.add('hello')

container.style.display = "flex"

h1.innerText = "Hello World!"
p.innerText = "Hello World!"

body.append(container)
container.append(niga_box)
niga_box.append(niga, hello)
hello.append(h1, p)

return container

}



for (let i = 0; i < 4; i++) {
    Prog()
    
}



/// 2 задание

const box_container = document.createElement("div");
document.body.append(box_container);

const they_knew = ["Byonce", "P.Diddy", "Will-Smith"];
const ages = [41, 55, 56];

function Box(name, old) {
  const box = document.createElement("div");
  const card = document.createElement("div");
  const h2 = document.createElement("h2");
  const age = document.createElement("div");
  const span_1 = document.createElement("span");
  const span_2 = document.createElement("span");

  box_container.classList.add("box-container");
  box.classList.add("box");
  card.classList.add("card");
  age.classList.add("age");

  h2.innerText = name;
  span_1.innerText = "Age";
  span_2.innerText = old;

  box_container.append(box);
  box.append(card);
  card.append(h2, age);
  age.append(span_1, span_2);
}

for (let i = 0; i < they_knew.length; i++) {
  Box(they_knew[i], ages[i]);
}


//3 задание 

const box = document.createElement("div");
body.append(box)
function Prod() {
    const card = document.createElement("div");
    const h2 = document.createElement("h2");
    const price = document.createElement("p");

    box.classList.add('product-container')
    card.classList.add('product-card')
    price.classList.add('price')

    h2.innerText = "Йогурт"
    price.innerText = "$25"

    box.append(card)
    card.append(h2,price)

}


for (let i = 0; i < 3; i++) {
  Prod()
    
}




// задание 4
const uzum_container = document.createElement("div");
uzum_container.classList.add("uzum-container");

document.body.append(uzum_container);

const products = ["oil", "jaket", "sword"];

const pictures = {
    oil: "./cfthcg7hj8j9g698gqb0.jpg",
    jaket: "./Ryan-Gosling.webp",
    sword: "./Снимок экрана (17).png"
};

const new_prices = {
    oil: "59 000",
    jaket: "100 000 000",
    sword: "Ваша жизнь"
}

const old_prices = {
    oil: "100 000",
    jaket: "900 000 000",
    sword: "Вся ваша зарплата"
}

const descriptions = {
    oil: "Масло для готовки высшего качества,приготовденное в самом городе Самара сочное масло",
    jaket: "Что прохладно стало? Тогда покупайте костюм который носил сам Райан Гослинг",
    sword: "Легендарный меч который достался мне кровью и потом.Много круток тогда ушло но, я заполучил меч для Changli"
};

function Uzum(productName) {
    const product_uzum = document.createElement("div");
    const main_img = document.createElement("img");
    const h3 = document.createElement("h3");
    const rating = document.createElement("div");
    const span_1 = document.createElement("span");
    const span_2 = document.createElement("span");
    const monthly_price = document.createElement("div");
    const price = document.createElement("div");
    const span_3 = document.createElement("span");
    const span_4 = document.createElement("span");
    const actions = document.createElement("div");
    const wishlist_btn = document.createElement("button");
    const cart_btn = document.createElement("button");

    product_uzum.classList.add("product-uzum");

    main_img.classList.add("main-image");
    main_img.src = pictures[productName];
    main_img.alt = "Main product image";

    h3.innerText = descriptions[productName] || "Продукт без описания";

    rating.classList.add("rating");
    span_1.innerText = "⭐ 4.7";
    span_2.innerText = "(30 отзывов)";

    monthly_price.classList.add("monthly-price");
    monthly_price.innerText = "4 887 сум/мес";

    price.classList.add("price-uzum");

    span_3.classList.add("old-price");
    span_3.innerText = old_prices[productName];

    span_4.classList.add("new-price");
    span_4.innerText = new_prices[productName];

    actions.classList.add("actions");

    wishlist_btn.classList.add("wishlist-button");
    wishlist_btn.innerText = "❤";

    cart_btn.classList.add("cart-button");
    cart_btn.innerText = "🛒";

    uzum_container.append(product_uzum);
    product_uzum.append(main_img, h3, rating, monthly_price, price, actions);
    rating.append(span_1, span_2);
    price.append(span_3, span_4);
    actions.append(wishlist_btn, cart_btn);
}


for (const product of products) {
    Uzum(product);
}