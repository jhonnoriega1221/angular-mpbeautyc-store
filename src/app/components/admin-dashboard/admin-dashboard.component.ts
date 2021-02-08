import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

import { PedidoService } from '../../services/pedido.service';

import { Pedido } from '../../interfaces/pedido';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  pedidosVendidos:number;
  pedidosRealizados:number;
  ingresosObtenidos:number = 0;
  cantidadDeClientes:number;

  constructor(
  	private nav:NavbarService,
  	private pedidoService:PedidoService
  	) { }

  ngOnInit(): void {

  	this.pedidoService.getPedidos().subscribe(
  		res =>{
  			this.pedidosRealizados = res.length;
  		}
	);
	this.pedidoService.getPedidosEntregados().subscribe(
		res =>{
			this.pedidosVendidos = res.length;
			for(let i = 0; i<res.length; i++){
				this.ingresosObtenidos += parseInt(res[i].netTotal);
			}
		}
	);

    this.nav.show();

    
  }

}
