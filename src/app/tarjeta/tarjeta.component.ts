import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input()
  nombre : string = "Yazmin"
  @Input()
  apellido : string = "Vásquez"
  @Input()
  biografia : string = "Nací el 6 de septiembre del 2001 en la provincia de San Pedro de Macoris, actualmente vivo en La Romana, República Dominicana."
  constructor() { }

  ngOnInit(): void {
  }

}
