import Dt_tienda from "./Dt_tienda.js";
export default class Cl_Ventas {
    constructor(nombreCliente, factura, costo, cnArticulos, incremento = Dt_tienda.porcIncremento){
        this.nombreCliente = nombreCliente;
        this.factura = factura;
        this.costo = costo;
        this.cnArticulos = cnArticulos;
        this.incremento = incremento;
    }

    set nombreCliente(nombreCliente){
        this._nombreCliente = nombreCliente;
    }
    
    get nombreCliente(){
        return this._nombreCliente;
    }

    set factura(factura){
        this._factura = +factura;
    }

    get factura(){
        return this._factura;
    }

    set costo(costo){
        this._costo = +costo;
    }

    get costo(){        
        return this._costo;
    }

    set cnArticulos(cnArticulos){
        this._cnArticulos = +cnArticulos;
    }

    get cnArticulos(){
        return this._cnArticulos;
    }

    montoIncremento(){
        return ((this.costo * this.incremento) / 100);
    }
    calcPrecioTotal(){
        return this.costo + this.montoIncremento();
    }

 

    
}