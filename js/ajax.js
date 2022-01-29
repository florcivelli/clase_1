
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
