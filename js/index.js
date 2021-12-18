//............PROMPT, TYPEOF............

/* let nombre = prompt('¡Hola! ¿Cuál es tu nombre?')
let edad = +prompt('¿Edad?')

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);


if (edad < 18) {
   alert('Debe ser mayor de edad')   
} else {
    alert('Bienvenido/a ' + nombre)
} */

//Defino productos con una clase

//class Vinos {

  function Vinos( nombre, precio, cantidad, img ) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
      this.img = img;
  }  
//}

let vino1 = new Vinos("Alfil", 1800, 100, './media/alfil.png');
let vino2 = new Vinos("Los Dragones", 2500, 100, './media/los dragones.png');
let vino3 = new Vinos("Los Dragones Torrontés", 2200, 100, './media/los dragones torrontes.png');
let vino4 = new Vinos("Maida", 1500, 100, './media/maida tinto.png');

let misVinos = [];

misVinos.push(vino1, vino2, vino3, vino4);

let contenedorProductos = document.getElementById('contenedor-productos')

for (let Vinos of misVinos){
let div = document.createElement('div'); 
div.setAttribute('class', "padre__vinos")

div.innerHTML = `
<img src="${Vinos.img}" alt="" width="150">
`;

contenedorProductos.appendChild(div);

/* class Carrito {

  constructor( lista ) {
      this.lista = lista;
  }

  findAllItems() {
      return this.lista;
  }

  createItem( item ) {
      this.lista.push( item )
  }
}

const carrito = new Carrito([])

carrito.createItem( vino1 )
carrito.createItem( vino2 )
carrito.createItem( vino3 )
carrito.createItem( vino4 )

// Obtengo los items del carrito
console.log( carrito.findAllItems() ) */

//........Listado de productos, Arrays..........

/* let vinos = [
  {
    nombre: "Alfil",
    precio: 1800,
    cantidad: 100
  },
  {
    nombre: "Los Dragones",
    precio: 2500,
    cantidad: 100
  },
  {
    nombre: "Los Dragones Torrontés",
    precio: 2200,
    cantidad: 100
  },
  {
    nombre: "Maida",
    precio: 1500,
    cantidad: 100
  }
] */

/* for (const i of vinos){
  console.log(i)
} */

//.............Aplico un filtro.............

/* let unVino = vinos.filter(vinos => vinos.precio == 1500)
console.log(unVino) */

// --------------------Simulador--------------------------

/* const recargo3 = 1.2; // 20%
const recargo6 = 1.4; // 40%
const recargo12 = 1.6; // 60%

let cantidadDinero = prompt("Digite la cantidad de dinero.")
let cantidadCuotas = prompt("Digite la cantidad cuotas. (3, 6 o 12 cuotas)")

function calcularMostrar(recargo) {
  let total = cantidadDinero * recargo;
  let valorCuota = total / cantidadCuotas;
  console.log("total", total);
  for (let i = 1; i <= cantidadCuotas; i++) {
    console.log(`Cuota nro ${i}: 
    $ ${valorCuota.toFixed(2)}`);
  }
}

if (cantidadCuotas == 3) {
   let total = cantidadDinero*recargo3;
   let valorCuota = total/cantidadCuotas;
   console.log("total", total);
   console.log("valor cuota", valorCuota);
} else if (cantidadCuotas == 6) {
    let total = cantidadDinero*recargo6;
    let valorCuota = total/cantidadCuotas;
    console.log("total", total);
    console.log("valor cuota", valorCuota);
} else if (cantidadCuotas == 12) {
    let total = cantidadDinero*recargo12;
    let valorCuota = total/cantidadCuotas;
    console.log("total", total);
    console.log("valor cuota", valorCuota);
} else {
    console.log("No ingresó valor correcto")
}
