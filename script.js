let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(item, price) {
  cart.push({ item, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("افزوده شد!");
}
function loadCart() {
  const container = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  let sum = 0;
  container.innerHTML = "";
  cart.forEach((c, i) => {
    container.innerHTML += `<div>${i + 1}. ${c.item} - ${c.price.toLocaleString()} تومان</div>`;
    sum += c.price;
  });
  total.innerText = "جمع کل: " + sum.toLocaleString() + " تومان";
}
function printInvoice() {
  window.print();
}
function sendToWhatsApp() {
  let msg = "سفارش:
", total = 0;
  cart.forEach(c => {
    msg += `- ${c.item} (${c.price.toLocaleString()} تومان)
`;
    total += c.price;
  });
  msg += `
جمع کل: ${total.toLocaleString()} تومان`;
  window.open(`https://wa.me/989376899233?text=${encodeURIComponent(msg)}`, "_blank");
}
window.onload = function() {
  if (document.getElementById("cart-items")) loadCart();
};