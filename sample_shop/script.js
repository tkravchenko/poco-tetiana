/**
 * WHAT WE HAD SO FAR
 * loops
 * conditions
 * functions
 * objects
 * arrays
 * events
 * DOM manipulation
 * 
 * HOW WE CAN USE THAT IN OUR SHOP:
 * e.g. store and list our products
 * e.g. add / remove items to / from the car
 */

const products = [
    {
        title: "Bottle 1",
        image : "img/bottle-glas.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
    {
        title: "Bottle 2",
        image : "img/bottle-white-2.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
    {
        title: "Bottle 3",
        image : "img/bottle-white.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
    {
        title: "Bottle 4",
        image : "img/bottle-green.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
    {
        title: "Bottle 5",
        image : "img/bottle-wood.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
    {
        title: "Bottle 6",
        image : "img/bottle-grey.jpg",
        price: "CHF 30.00 ",
        material: "Glas",
        isAvailable: true,
        color: ["Green", "Blue", "Yellow"]
    },
];

const shop = document.querySelector(".shop") //have access to our class "shop"
/*
products.forEach((product) => {
    if (product.isAvailable) {
        shop.innerHTML += `
        <article>
            <img src="${product.image}" alt="${product.title}"/>
            <h4>${product.title}</h4>
            <p>${product.price}</p>
            <p>${product.color[0]}</p>
            <p>${product.material}</p>
            <button>Add to cart</button>
        </article>
        `;

    }
});
*/

products.forEach((product) => {

    // Create element
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    article.appendChild(img); 

    const title = document.createElement("h4");
    title.textContent = product.title;
    article.appendChild(title);

    const color = document.createElement("p");
    color.textContent = product.color[0];
    article.appendChild(color);

    const material = document.createElement("p");
    material.textContent = product.material;
    article.appendChild(material);

    const button = document.createElement("button");
    button.textContent = "Add to cart";
    article.appendChild(button);

    shop.appendChild(article);
});
