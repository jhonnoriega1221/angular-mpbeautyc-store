import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import { NavbarService } from 'src/app/services/navbar.service';

import { Pedido } from '../../interfaces/Pedido';
import { Usuario } from '../../interfaces/Usuario';

@Component({
  selector: 'app-admin-clients-orders',
  templateUrl: './admin-clients-orders.component.html',
  styleUrls: ['./admin-clients-orders.component.css']
})


export class AdminClientsOrdersComponent implements OnInit {

pedidos:Pedido[];

  constructor(
    private pedidoService:PedidoService,
    private nav:NavbarService
  ) { }

  ngOnInit(): void {
    this.pedidoService.getPedidos().subscribe(
      res =>{
        this.pedidos = res;
      }, err => console.log(err)
    )
    this.nav.show();
  }

}
