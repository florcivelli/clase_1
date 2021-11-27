let nombre = prompt('¡Hola! ¿Cuál es tu nombre?')
let edad = +prompt('¿Edad?')

console.log(nombre, typeof nombre);
console.log(edad, typeof edad);


if (edad < 18) {
   alert('Debe ser mayor de edad')   
} else {
    alert('Bienvenido/a ' + nombre)
}


