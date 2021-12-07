const urlGET = "data.json";
$(".ajax").prepend('<button class= "hUno" id="btn3">¡Conocé los próximos títulos a la venta!</button>');

$("#btn3").one("click", function() {
    $.getJSON(urlGET, function (autores, estado) {
        if(estado === "success"){

            let datos = autores;
       
            for (const x of datos) {
            $(".ajax").append(
            ` <div class="col margen">
                <div class="card" id="centrar" style="width: 18rem;">
                    <img src= "${x.ruta}" class="card-img-top" id="ancho" alt="El nombre de la rosa">
                    <div class="card-body">
                        <h5 class="card-title" id="2">${x.nombre}</h5>
                        <h6 class="card-title" id="2">${x.autor}</h6>           
                    </div>                
                </div>
            </div>`)
            };
            
            $(".ajax").append(`<div class= "contacto">
                                <p class="pInferior">¡Para más información, envianos un correo a lamandragoralibros@gmail.com !</p>
                                </div>`)
    }})
})


