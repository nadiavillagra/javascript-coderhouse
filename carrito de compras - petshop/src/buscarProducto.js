import { mostrarProductos } from "./App.js";
import { productos } from "./stock.js";

// buscar productor: filtra productos en el header.
const inputSearch = document.getElementById("buscarProducto");

const buscarProducto = (productos, productoNombre) => {
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(productoNombre.toLowerCase()));
    mostrarProductos(productosFiltrados);
};

inputSearch.addEventListener("input", (e) => {
    buscarProducto(productos, e.target.value);
});