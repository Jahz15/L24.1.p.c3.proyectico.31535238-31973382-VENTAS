/**Se desea llevar un control de las ventas que realiza una tienda. Se tiene por cada venta: nombre del cliente,
número de factura, costo y cantidad de artículos. Se requiere de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el monto inicial en caja y el porcentaje de incremento para
el costo de cada venta. pero se tiene un incremento del 25% en el costo de cada venta. por tnato

como datos de entradas tiene: el nombre del cliente, el costo de la venta, la cantidad de artículos y 
el porcentaje de incremento.

como de entrada estan los siguientes:
cliente:     factura:     costo:     cantidad:  Incremento   precio de venta:  
Luis          1111         100        3             25            375
Carla         2222         50         4             25            250  
Mery         3333         200        10             25            2500


calcular el monto final en caja = monto inicial + monto de ventas = un numero
calcular el cliente que pago el monto mayor = es mery pero seria por arrays
calcular los clientes que se llevaron solo un articulo = no hay nadie pero seria un array tambien 
 */
import Cl_tienda from "./Cl_tienda.js";
import Cl_ventas from "./Cl_ventas.js";
import Dt_ventas from "./Dt_ventas.js";

const tienda = new Cl_tienda();

Dt_ventas.forEach((venta) => tienda.agregarVenta(new Cl_ventas(venta.Cliente, venta.Factura, venta.Costo, venta.Cantidad)));


let clientesMontoMayor =(tienda, salida) =>{
    let ventas = tienda.clientesMontoMayor();
    salida.innerHTML = `<br>Clientes con mayor monto en compras:`
    ventas.forEach((cliente) => salida.innerHTML += `<br>  [ ${cliente} ]`);
}

let clientesDeUnArticulo =(tienda, salida) =>{
    let ventas = tienda.clientesDeUnArticulo();
    if (ventas.length === 0){
        salida.innerHTML = `<br>No existen ventas registradas de solo un articulo vendido` 
    } 
    else { salida.innerHTML = `<br>Clientes que llevaron solo un articulo:`
    ventas.forEach((cliente) => salida.innerHTML += `  [ ${cliente} ] `);
}
}

let montoCaja =(tienda, salida) => salida.innerHTML = `<br>Monto final en caja: ${tienda.calcularMontoTotal().toFixed(2)}$`;

let agregarVenta = (tienda) =>{
    let nombreCliente = prompt("Ingrese el nombre del cliente");
    let factura = prompt("Ingrese el numero de la factura");
    let costo = prompt("Ingrese el costo de la compra");
    let cnArticulos = prompt("Ingrese la cantidad de articulos adquiridos por el cliente");
    tienda.agregarVenta(new Cl_ventas(nombreCliente, factura, costo, cnArticulos));
}

let eliminarRVenta = (tienda) => {
    let factura = prompt("Ingrese el numero de factura de la venta a eliminar");
    if(tienda.eliminarRVenta(factura))
        alert(`Se elimino correctamente el registro de venta Nª ${factura}:`);
    
        else alert(`No se elimino correctamente el registro de venta Nª ${factura}:`);
    
}
    
let listarDatosClientes = (tienda, salida) => {
    tienda.ventas.forEach((venta)  => {
        salida.innerHTML += `<br>Cliente: ${venta.nombreCliente}
        <br>Factura: ${venta.factura}
        <br>Costo: ${venta.costo}$
        <br>Cantidad de articulos: ${venta.cnArticulos}
        <br>Precio de venta: ${venta.calcPrecioTotal().toFixed(2)}$<br>----------------------------`;
    })
}

let salida1 = document.getElementById("salida1"),
 salida2 = document.getElementById("salida2"),
opciones = document.getElementById("Opciones");

salida1.innerHTML = `<br>Seleccione una de las opciones en pantalla:
<br>1 = Agregar datos del nuevo cliente
<br>2 = Listar datos de clientes
<br>3 = Eliminar registros de venta
<br>4 = Monto final en caja
<br>5 = Clientes con mayor monto en compras
<br>6 = Clientes que llevaron solo un articulo
<br>0 = salir`;

opciones.onclick = () =>{
    let opcion = +prompt("Seleccione una de las opciones: 1, 2, 3, 4, 5, 6 o 0 para salir");
    switch(opcion){
        case 1:
             agregarVenta(tienda); 
             break;
        case 2:
             listarDatosClientes(tienda, salida2); 
             break;
        case 3:
             eliminarRVenta(tienda); 
             break;
        case 4:
             montoCaja(tienda, salida2); 
             break;
        case 5: 
             clientesMontoMayor(tienda, salida2); 
             break;    
        case 6: 
             clientesDeUnArticulo(tienda, salida2);
             break;      
        case 0: 
        break;
    }
}







































//salida.innerHTML = `<br>Monto final en caja: ${tienda.calcularAcumulado()}<br>`;
//salida.innerHTML += `<br>Clientes que pagaron el monto mayor: ${JSON.stringify(tienda.clientesMontoMayor())}<br>`;
//salida.innerHTML += `<br>Clientes que llevaron solo un articulo: ${JSON.stringify(tienda.clientesDeUnArticulo())}<br>`;