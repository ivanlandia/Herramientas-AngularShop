import { Injectable } from '@angular/core';
import {Pedido} from "../producto/Pedido";

@Injectable()
export class CarritoComprasService {

  pedidos : any[] = [];

  constructor() {
    this.pedidos= [];
  }

  agregarPedido(pedido:Pedido){
    this.pedidos.push(pedido);

  }

  pagarPedido(){
    this.pedidos = [];
  }
  pedidosPendientes() : number{
    console.log(this.pedidos.length);
    return this.pedidos.length;
  }

}
