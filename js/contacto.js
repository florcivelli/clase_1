/* const botonEnviar = document.getElementById( 'boton__enviar' )
botonEnviar.addEventListener('click', function () {
    alert( `${ nombre } , tu formulario ha sido enviado` )
}) */

/* const nombreComprador = document.getElementById( 'nombre__comprador' )

let nombre = ""

nombreComprador.onkeyup = (event) => {
    console.log(event)
    nombre = event.target.value
} */

$('#formcontacto').submit( function (event) {
    event.preventDefault()

    let children = $(event.target).children();

    const name = $('#nombre__comprador')[0].value
    const email = $('#exampleFormControlInput1')[0].value
    const asunto = $('#Asunto')[0].value
    const mensaje = $('#exampleFormControlTextarea1')[0].value

    console.log(name, email, asunto, mensaje)
    
})

const URL_JSON = "../db/data.json"
//Agregamos un botón con jQuery
$("body").prepend('<button id="btn1">JSON</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
$.getJSON(URL_JSON, function (respuesta, estado) {
    if(estado === "success"){
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("body").prepend(`<div>
                                <h3>${dato.name}</h3>
                                <p> ${dato.email}</p>
                            </div>`)
      }  
    }
    });
});
