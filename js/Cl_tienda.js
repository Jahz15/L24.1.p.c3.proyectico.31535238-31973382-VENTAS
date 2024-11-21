import Dt_ventas from "./Dt_ventas.js";
import Dt_tienda from "./Dt_tienda.js";
export default class Cl_tienda{

    constructor(montoCaja = Dt_tienda.montoCaja, incremento = Dt_tienda.porcIncremento){
        this.ventas = [];
        this.montoCaja = montoCaja;
        this.incremento = incremento;
    }

    agregarVenta(venta){
        this.ventas.push(venta);
    }

    eliminarRVenta(factura){
        let facturaVenta = -1;
        for (let i = 0; i < this.ventas.length; i++){
            if (this.ventas[i].factura == factura){ 
                facturaVenta = i;
                break;
            }
        }
        if (facturaVenta !== -1){
            this.ventas.splice(facturaVenta, 1);
        }
        return facturaVenta !== -1;
        
    }

    clientesMontoMayor(){
        let mayor = this.ventas[0].calcPrecioTotal();
        for(let i = 1; i < this.ventas.length; i++){
            if(this.ventas[i].calcPrecioTotal() > mayor){
                mayor = this.ventas[i].calcPrecioTotal();
            }
        }
        return this.ventas.filter(venta => venta.calcPrecioTotal() == mayor).map(venta => venta.nombreCliente);
    }

    clientesDeUnArticulo(){
        return this.ventas.filter(venta => venta.cnArticulos == 1).map(venta => venta.nombreCliente);
    }

    calcularAcumulado(){
        for(let i = 0; i < this.ventas.length; i++){
            this.montoCaja += this.ventas[i].calcPrecioTotal();
        }
        return this.montoCaja;
    }

}
