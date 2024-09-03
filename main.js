// // Funciones
function obtenerPrecioDelProducto() {
     let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));

     // Mientras el precio del producto sea menor o igual a cero
     while(precioProducto <= 0) {
         alert("PRECIO DEL PRODUCTO INVÁLIDO, VUELVA A INGRESAR OTRO");

         precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
     }

     return precioProducto;
 }


 // Inicio del programa
    let nombreProducto = prompt("Ingrese el nombre de un producto ---- Escriba fin para salir del programa");
    let listaDeProductos = "";
    let totalProductos = 0;

    while(nombreProducto !== "fin") {

        // Pedimos y validamos precio del producto
        const precioProducto = obtenerPrecioDelProducto();

        // Sumar el precio del producto al total
        totalProductos = totalProductos + precioProducto;

        if(listaDeProductos !== '') {
            listaDeProductos = listaDeProductos + " - ";
     }

        listaDeProductos = listaDeProductos + nombreProducto;

    // Volvemos a pedir nombre del producto
        nombreProducto = prompt("Ingrese el nombre de un producto - Escriba fin para salir del programa");
 }

console.log("Total de productos: $" + totalProductos);
console.log("Lista de productos: " + listaDeProductos);
