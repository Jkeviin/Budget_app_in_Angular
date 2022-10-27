import { Egreso } from "./egreso.model";

export class EgresoServicio {
    egresos: Egreso[] = [
        new Egreso ("Renta Depto", 900),
        new Egreso ("Ropa", 200)
    ]

    eliminar(egreso: Egreso){
        const indice: number = this.egresos.indexOf(egreso); // indexOf() devuelve el índice del primer elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
        this.egresos.splice(indice, 1);
    }
}