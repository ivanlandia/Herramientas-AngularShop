import { Component, OnInit } from '@angular/core';
import {CarritoComprasService} from "../services/carrito-compras.service";

@Component({
  selector: 'c-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private carritoService: CarritoComprasService) { }

  ngOnInit() {
  }

  pedidosPendientes() : number{
    console.log(this.carritoService.pedidos.length)
    return this.carritoService.pedidos.length;
  }

}
