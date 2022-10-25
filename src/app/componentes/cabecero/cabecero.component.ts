import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  @Input() presupuestoTotal: number = 0;
  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
