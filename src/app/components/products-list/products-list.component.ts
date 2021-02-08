import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

productos:Producto[];

  constructor(
  	private productoService:ProductoService
	) { }

  ngOnInit(): void {
  	this.productoService.getProductosDisponibles().subscribe(
  		res =>{
  			this.productos=res;
  		}
	)
  }

}
