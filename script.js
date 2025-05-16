let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("آیتم به سبد خرید اضافه شد!");
}

function selectSize(size) {
  console.log("سایز انتخابی:", size);
}

function loadCart() {
  const container = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  let sum = 0;
  container.innerHTML = "";
  cart.forEach((entry, index) => {
    container.innerHTML += `<div>${index + 1}. ${entry.item} - ${entry.price.toLocaleString()} تومان</div>`;
    sum += entry.price;
  });
  total.innerText = "جمع کل: " + sum.toLocaleString() + " تومان";
}

function printInvoice() {
  window.print();
}

function sendToWhatsApp() {
  let message = "سفارش من:
";
  let total = 0;
  cart.forEach(c => {
    message += `- ${c.item} (${c.price.toLocaleString()} تومان)
`;
    total += c.price;
  });
  message += `
جمع کل: ${total.toLocaleString()} تومان`;
  let url = `https://wa.me/989376899233?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

window.onload = loadCart;