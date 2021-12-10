//............PROMPT, TYPEOF............

let nombre = prompt('¡Hola! ¿Cuál es tu nombre?')
let edad = +prompt('¿Edad?')

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);


if (edad < 18) {
   alert('Debe ser mayor de edad')   
} else {
    alert('Bienvenido/a ' + nombre)
}

//........Listado de productos, Arrays..........

let vinos = [
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
]

for (const i of vinos){
  console.log(i)
}

//.............Aplico un filtro.............

let unVino = vinos.filter(vinos => vinos.precio == 1500)
console.log(unVino)

// --------------------Simulador--------------------------

const recargo3 = 1.2; // 20%
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