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

//jQuery

$('#formcontacto').submit( function (event) {
    event.preventDefault()

    let children = $(event.target).children();

    const name = $('#nombre__comprador')[0].value
    const email = $('#exampleFormControlInput1')[0].value
    const asunto = $('#Asunto')[0].value
    const mensaje = $('#exampleFormControlTextarea1')[0].value

    console.log(name, email, asunto, mensaje)
    
})