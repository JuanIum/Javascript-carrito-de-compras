// OBJETOS CONVERTIDOS A JSON Y ALMACENADOS EN LOCALSTORAGE: 

// CREACION DE OBJETOS EN ARRAY

const libros = [
    { id: 1, nombre: "La mandragora", precio: 100, stock: 10 },
    { id: 2, nombre: "El nombre de la rosa", precio: 150, stock: 10 },
    { id: 3, nombre: "Kafka en la Orilla", precio: 200, stock: 10 },
    { id: 4, nombre: "Drácula", precio: 250, stock: 10 },
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

