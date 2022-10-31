import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { EgresoComponent } from './componentes/egreso/egreso.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { IngresoServicio } from './componentes/ingreso/ingreso.servicio';
import { EgresoServicio } from './componentes/egreso/egreso.servicio';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    IngresoComponent,
    EgresoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
