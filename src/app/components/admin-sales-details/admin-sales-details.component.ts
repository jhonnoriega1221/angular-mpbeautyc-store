import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ActivatedRoute } from '@angular/router';

import { PedidoService } from '../../services/pedido.service';
import { Pedido } from '../../interfaces/pedido';

@Component({
  selector: 'app-admin-sales-details',
  templateUrl: './admin-sales-details.component.html',
  styleUrls: ['./admin-sales-details.component.css']
})
export class AdminSalesDetailsComponent implements OnInit {

id:string;
venta:Pedido;

  constructor(
  	public nav:NavbarService,
  	private pedidoService:PedidoService,
    private activeRoute:ActivatedRoute,
  	) { }

  ngOnInit(): void {
  	this.activeRoute.params.subscribe(params =>{
  		this.id = params ['id'];
  		this.pedidoService.getPedido(this.id).subscribe(
  			res =>{
  				this.venta = res[0];
  			}, err =>{
  				console.log(err);
  			}
  		)
  	})

  	this.nav.show();
  }

}
