const botonEnviar = document.getElementById( 'boton__enviar' )
botonEnviar.addEventListener('click', function () {
    alert( `${ nombre } , tu formulario ha sido enviado` )
})

const nombreComprador = document.getElementById( 'nombre__comprador' )

let nombre = ""

nombreComprador.onkeyup = (event) => {
    console.log(event)
    nombre = event.target.value
}

