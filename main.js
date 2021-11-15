
/////////////////////////////////////////   CARRITO DE COMPRAS      //////////////////////////////////////////////////////
/////////////////////////////////////////   LIBRERÍA LA MANDRAGORA  /////////////////////////////////////////////////

//EVENTO CLICK - EVENT HANDLER - ASIGNAR (A TODOS LOS BOTONES CON LA CLASE "botonComprar") UN EVENTO CON SU FUNCION 
let botonComprar = document.querySelectorAll(".botonComprar");

for(let i of botonComprar){
    i.addEventListener("click" , agregarCarrito); 
}

//FUNCIONALIDADES DEL BOTON "COMPRAR": 
function agregarCarrito(e) {
    
    e.preventDefault()
    
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
    
    let imagenProducto = abuelo.querySelector("img").src;
    let nombreProducto = padre.querySelector("h5").textContent;
    let precioProducto = padre.querySelector("h6").textContent;

    const producto = {
        imagen: imagenProducto,
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: 1
    }
    
    carrito.push(producto);
    mostrarCarrito(producto);
}

// FUNCION ANIDADA A LA FUNCION "agregarCarrito"
function mostrarCarrito(producto){
        let filas = document.createElement("tr");
    filas.innerHTML = `  
                            <td> <img src="${producto.imagen}" class = "imgTd"> </td>
                            <td class = "parrafoTd"> ${producto.nombre} </td>   
                            <td class = "parrafoPrecio"> ${producto.precio}</td>
                            <td class = "parrafoCant"> ${producto.cantidad}</td>
                            <td> <button class="btn btn-primary" id= "agregar">+</button></td>
                            <td> <div> <button class="btn btn-danger" id="botonEliminar">Eliminar</button> </div></td>
                            
    `
        
        let contenido = document.getElementById("tabla-contenido");
        contenido.appendChild(filas);
    
    $("#agregar").click(function (e){
        e.preventDefault();
    })
    
    $("td div button").click(function (e) { //BOTON "ELIMINAR" (DESAFIO JQUERY)
        e.preventDefault();
        e.target.parentNode.parentNode.parentNode.remove();
    });

    $("#vaciarCarrito").click(function () { //BOTON "VACIAR CARRITO" (DESAFIO JQUERY)
        filas.remove();
    });
    

        
}


//AGREGAR OBJETOS A UN ARRAY VACÍO (PARA LUEGO MOSTRARLOS EN CARRITO):
let carrito = [];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// OBJETOS CONVERTIDOS A JSON Y ALMACENADOS EN LOCALSTORAGE: 

// CREACION DE OBJETOS EN ARRAY
const libros = [
    { id: 1, nombre: "La mandragora", precio: 860, stock: 10 },
    { id: 2, nombre: "El nombre de la rosa", precio: 860, stock: 10 },
    { id: 3, nombre: "Kafka en la Orilla", precio: 860, stock: 10 },
    { id: 4, nombre: "Drácula", precio: 860, stock: 10 },
    { id: 5, nombre: "Cuentos de amor, locura y muerte", precio: 860, stock: 10 },
    { id: 6, nombre: "El golem", precio: 860, stock: 10 },
    { id: 7, nombre: "Frankestein", precio: 860, stock: 10 },
    { id: 8, nombre: "El monje", precio: 860, stock: 10 },
];

// CONVERSION A FORMATO JSON
const storageLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
for (const x of libros) {
    storageLocal(x.id, JSON.stringify(x));
};

// OBJETOS RECUPERADOS DEL LOCAL STORAGE (MEDIANTE CONSOLA)
console.log(localStorage.getItem("1"));
console.log(localStorage.getItem("2"));
console.log(localStorage.getItem("3"));
console.log(localStorage.getItem("4"));
console.log(localStorage.getItem("5"));
console.log(localStorage.getItem("6"));
console.log(localStorage.getItem("7"));
console.log(localStorage.getItem("8"));


