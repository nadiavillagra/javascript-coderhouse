const arrayProductos = [];

const producto1 = new Productos(1, 'alimento para cachorros', '21 kg', 7361)
const producto2 = new Productos(2, 'alimento para adultos carne y vegetales', '21 kg', 6894)
const producto3 = new Productos(3, 'alimento para adultos carne, pollo y cereales', '21 kg', 6893)
const producto4 = new Productos(4, 'alimento para razas pequeñas', '15 kg', 6625)
const producto5 = new Productos(5, 'alimento para senior', '8 kg', 3630)
const producto6 = new Productos(6, 'alimento para gatitos', '10 kg', 6001)
const producto7 = new Productos(7, 'alimento para gato carne', '10.1 kg', 5355)
const producto8 = new Productos(8, 'alimento para gato pollo', '10.1 kg', 5355)
const producto9 = new Productos(9, 'alimento para gato pescado', '10.1 kg', 5355)
const producto10 = new Productos(10, 'alimento para gato hogareño', '10 kg', 6001)

arrayProductos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10)

// funcion para ordenar valores de menor a mayor
const valorMenorMayor = () => {
    arrayProductos.sort((a, b) => a.precio - b.precio);
    mostrarListaOrdenada();
};

// funcion para ordenar valores de mayor a menor
const valorMayorMenor = () => {
    arrayProductos.sort((a, b) => b.precio - a.precio);
    mostrarListaOrdenada();
};

const mostrarListaOrdenada = () => {
    let array = [];
    arrayProductos.forEach(producto => array.push(producto.nombre+' $'+producto.precio));
    alert('lista de precios'+'\n'+array.join('\n'))
};

function comprarProdutos() {
    let productoNombre = '';
    let productoCantidad = 0;
    let total = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Cual elemento de la lista queres comprar?', 'Ej: limento para razas pequeñas');
        productoCantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

        if (producto){
            total += producto.precio * productoCantidad;
        } else {
            alert('El producto no se encuentra disponible.');
        }

        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    descuentoCompra(total);
}

function descuentoCompra(totalCompra) {
    const descuento = 0.80;
    if (totalCompra >= 1000) {
        totalCompra = totalCompra * descuento;
        alert('Tenes 20% de descuento')
    }
    calcularEnvio(totalCompra)
}

function calcularEnvio(totalCompra) {
    const costoEnvio = 500;
    let envioADomicilio = confirm('Quieres envio a domicilio?');

    if (envioADomicilio && totalCompra >= 2000) {
        alert('Tienes envio gratis. El total de la compra es: ' + totalCompra);
    } else if (envioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += costoEnvio;
        alert('El costo del envio es de $500. El total de la compra es: ' + totalCompra);
    } else {
        alert('El total de la compra es: ' + totalCompra);
    }
};

function comprar() {
    const quieroOrdenarla =confirm('¿Queres ordenar la lista de menor valor al mayor?');
    if(quieroOrdenarla) {
        valorMenorMayor();
    }else {
        valorMayorMenor();
    }

    comprarProdutos();
}

comprar();



/* 
function validarCantidad(cantidad) {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar al menos un producto.')
        } else {
            alert('Debe ingresar un numero.')
        }
        cantidad = parseInt(prompt('¿Cuantos queres comparar?'));
    }

    return cantidad;
}

function descuentoCompra(totalCompra) {
    const descuento = 0.80;
    if (totalCompra >= 1000) {
        return totalCompra * descuento;
    } else {
        return totalCompra;
    }
}


function calcularEnvio(totalCompra) {
    const costoEnvio = 500;
    let envioADomicilio = confirm('Quieres envio a domicilio?');

    if (envioADomicilio && totalCompra >= 2000) {
        alert('Tienes envio gratis. El total de la compra es: ' + totalCompra);
    } else if (envioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += costoEnvio;
        alert('El costo del envio es de $500. El total de la compra es: ' + totalCompra);
    } else {
        alert('El total de la compra es: ' + totalCompra);
    }
}

calcularEnvio(descuentoCompra(comprarProdutos())); */