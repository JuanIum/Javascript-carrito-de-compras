
/////////////////////////////////////////   CARRITO DE COMPRAS      //////////////////////////////////////////////////////
/////////////////////////////////////////   LIBRERÍA LA MANDRAGORA  /////////////////////////////////////////////////

//EVENTO CLICK + FUNCION "AGREGAR CARRITO":
$(".botonComprar").click(agregarCarrito);

//FUNCIONALIDADES DEL BOTON "COMPRAR": 
function agregarCarrito(e) {

    e.preventDefault()

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let imagenProducto = abuelo.querySelector("img").src;
    let nombreProducto = padre.querySelector("h5").textContent;
    let idProducto = padre.querySelector("h5").id; 
    let precioProducto = padre.querySelector("h6").textContent;
    let crearProducto = true; 

    for (var i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            carrito[i].cantidad += 1;
            crearProducto = false;
        }
    }

    if (crearProducto == true) {
        const producto = {
            id: idProducto,
            imagen: imagenProducto,
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1
        }

        carrito.push(producto);
    }
    mostrarCarrito();
}

// FUNCION ANIDADA A LA FUNCION "agregarCarrito"
function mostrarCarrito() {
    let contenido = document.getElementById("tabla-contenido");
    contenido.innerHTML = "";
    let montoTotal = 0;

    for (var i = 0; i < carrito.length; i++) {
        montoTotal += carrito[i].precio * carrito[i].cantidad;

        let filas = document.createElement("tr");
        filas.setAttribute("id", carrito[i].id);
        filas.innerHTML = `  
                                <td> <img src="${carrito[i].imagen}" class = "imgTd"> </td>
                                <td> ${carrito[i].nombre} </td>   
                                <td> $ ${carrito[i].precio}</td>
                                <td> ${carrito[i].cantidad}</td>
                                <td> <button class="btn btn-primary" name= "agregar">+</button></td>
                                <td> <button class="btn btn-danger" name="botonEliminar">Eliminar</button> </td>
                                
        `
        let contenido = document.getElementById("tabla-contenido");
        contenido.appendChild(filas);
    }

    $("button[name='agregar']").click(function (e) {
        idProducto = e.target.parentNode.parentNode.id;

        for (var i = 0; i < carrito.length; i++) {
            if (carrito[i].id === idProducto) {
                carrito[i].cantidad += 1;
            }
        }
        e.preventDefault();
        mostrarCarrito();
    })

    $("button[name='botonEliminar']").click(function (e) {
        idProducto = e.target.parentNode.parentNode.id;
        for (var i = 0; i < carrito.length; i++) {
            if (carrito[i].id === idProducto) {
                carrito.splice(i, 1);
            }
        }
        e.preventDefault();
        mostrarCarrito();
    });

    $("#vaciarCarrito").click(function () { 
        carrito = [];
        mostrarCarrito();
    });

    document.getElementById("monto").innerHTML = "$" + montoTotal;
}

//AGREGAR OBJETOS A UN ARRAY VACÍO (PARA LUEGO MOSTRARLOS EN CARRITO):
let carrito = [];

// DESAFIO ANIMACIONES CONCATENADAS JQUERY:
// BOTON "SINOPSIS" - METODO TOGGLE

$(".pUno").hide();
$(".botonAnimado").click(function (e) {
    e.preventDefault();
    let bebe = e.target;
    let nene = bebe.parentNode;
    let parrafoSinopsis = nene.querySelector(".pUno");
    $(parrafoSinopsis).toggle("fast");
});
