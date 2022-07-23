


const btn = document.getElementById("btn");                     // Llamo y asigno variable al boton, para poder "escucharlo" en la linea siguiente

btn.addEventListener("click", function () {
const qty = document.getElementById("qty").value;                // Llamo y asigno variable con el input qty
const color = document.getElementById("color").value;            // Llamo y asigno variable con el input color

const selectedQty = document.getElementById("selected-qty");     // Asigno una variable al "espacio"/ span que escribira en el carrito la cantidad elegida
selectedQty.innerHTML = qty;                                     // Lleno la variable con el input qty

const selectedColor = document.getElementById("selected-color"); // Asigno una variable al div que mostrará en el carrito el color elegido
selectedColor.style.backgroundColor = color;                     // Lleno la variable con el input color

let price = 25000;                                              //  Le asigno a una variable el precio unitario, para no manipular la operación que multiplica por la cantidad, en caso que el precio se modifique a futuro
const total = document.getElementById("total");                 // Asigno una variable al "espacio" / span que mostrará en el carrito el total a pagar
total.innerHTML = (qty*price).toLocaleString(); });             // Lleno la variable con el total dado por la operación de multiplicar qty y price, y le pido que lo exprese divido con comas.





