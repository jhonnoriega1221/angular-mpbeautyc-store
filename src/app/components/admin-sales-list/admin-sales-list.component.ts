import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { PedidoService } from '../../services/pedido.service';

import { Pedido } from '../../interfaces/Pedido';


@Component({
  selector: 'app-admin-sales-list',
  templateUrl: './admin-sales-list.component.html',
  styleUrls: ['./admin-sales-list.component.css']
})
export class AdminSalesListComponent implements OnInit {

	ventas:Pedido[];

  constructor(
    public nav:NavbarService,
    public pedidoService:PedidoService
  	) { }

  ngOnInit(): void {
  	this.pedidoService.getPedidosEntregados().subscribe(
  		res =>{
  			this.ventas = res;
  		}
	)
  	this.nav.show();
  }

}
