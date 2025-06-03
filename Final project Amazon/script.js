const products = [
    {id:1, name:"Wireless Headphone", price:2000, image:"images/headphone.jpg"},
    {id:2, name:"Iphone", price:150000, image:"images/phone.webp"},
    {id:3, name:"Watch", price:6599, image:"images/watch.jpg"},
    {id:4, name:"Laptop", price:120000, image:"images/laptop.jpg"},
    {id:5, name:"Speaker", price:8000, image:"images/speaker.jpg"}
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProducts() {
  const list = document.getElementById("product-list");
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}"/>
      <h3>${product.name}</h3>
      <p>NRs.${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

renderProducts();
updateCartCount();
