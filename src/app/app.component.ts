import { Component } from '@angular/core';
import { Egreso } from './componentes/egreso/egreso.model';
import { EgresoServicio } from './componentes/egreso/egreso.servicio';
import { Ingreso } from './componentes/ingreso/ingreso.model';
import { IngresoServicio } from './componentes/ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* Nota:
  La diferencia entre una clase y un servicio es que la clase es un conjunto de propiedades,
  mientras que el servicio es un conjunto de funciones. */

  /* Nota 2:
  El constructor es un metodo que se ejecuta cuando se crea una instancia de la clase.
  En este caso, se crea una instancia de la clase AppComponent. */


  // Se crean dos propiedades que son arrays de ingresos y egresos.
  ingresos : Ingreso[] = [];
  egresos : Egreso[] = [];


  constructor(private ingresoServicio : IngresoServicio,
    private egresoServicio : EgresoServicio) {
      this.ingresos = ingresoServicio.ingresos;
      this.egresos = egresoServicio.egresos;

      /* Explicación de lo anterior:
      lo que hace this.ingresos es tomar el valor de ingresoServicio.ingresos que en este caso es un array de ingresos.
      Lo mismo con this.egresos y egresoServicio.egresos.
      */
  }

  getIngresoTotal() : number {
    let ingresoTotal : number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor; // valor es una propiedad de la clase Ingreso, por ejemplo 4000.
    })
    return ingresoTotal;
  }

  getEgresoTotal() : number {
    let egresoTotal : number = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor; // valor es una propiedad de la clase Egreso, por ejemplo 900.
    });
    return egresoTotal;
  }

  getPorcentajeTotal() : number {
    return this.getEgresoTotal() / this.getIngresoTotal();
    // Se hace una division ya que el porcentaje se calcula dividiendo el egreso total entre el ingreso total.
  }

  getPresupuestoTotal() : number {
    return this.getEgresoTotal() - this.getIngresoTotal();
    // Se hace una resta ya que el presupuesto total se calcula restando el egreso total menos el ingreso total.
  }
}
