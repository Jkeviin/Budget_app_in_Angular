import { Ingreso } from "./ingreso.model"

export class IngresoServicio {
    ingresos: Ingreso[] = [
        new Ingreso ("Salario", 4000),
        new Ingreso ("Venta Coche", 500)
    ]
    eliminar(ingreso: Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso); // indexOf() devuelve el índice del primer elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
        this.ingresos.splice(indice, 1);
    }
}