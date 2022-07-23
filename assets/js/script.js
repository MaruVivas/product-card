


const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
const qty = document.getElementById("qty").value;      // Llamo y asigno variables con el input qty
const color = document.getElementById("color").value;  // Llamo y asigno variable con el input color

const selectedQty = document.getElementById("selected-qty");     // Asigno una variable al "espacio"/ span que escribira en el carrito la cantidad elegida
selectedQty.innerHTML = qty;                                     // Lleno la variable con el input qty

const selectedColor = document.getElementById("selected-color");
selectedColor.style.backgroundColor = color;

let price = 25000;
const total = document.getElementById("total");
total.innerHTML = (qty*price).toLocaleString(); });





