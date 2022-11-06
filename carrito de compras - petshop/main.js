function comprarProdutos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Queres comprar alimento para perros, gatos o ambos?', 'Ej: ambos');
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'perros':
                precio = 500;
                break;
            case 'gatos':
                precio = 600;
                break;
            case 'ambos':
                precio = 1100;
                break;
            default:
                alert('Alguno de los datos ingresados no es correcto');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;
        cantidadTotal += cantidad;

        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    return totalCompra;
}

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
        alert('Tienes envio gratis. El total de la compra es: $' + totalCompra);
    } else if (envioADomicilio && totalCompra < 2000 && totalCompra !== 0) {
        totalCompra += costoEnvio;
        alert('El costo del envio es de $500. El total de la compra es: $' + totalCompra);
    } else {
        alert('El total de la compra es: $' + totalCompra);
    }
}

calcularEnvio(descuentoCompra(comprarProdutos()));