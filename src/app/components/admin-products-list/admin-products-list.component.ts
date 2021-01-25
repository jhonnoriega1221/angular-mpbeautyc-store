import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ProductoService } from '../../services/producto.service';
import { ApiService } from '../../services/api.service';

import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {

  productos:Producto[];
  columnsToDisplay =['img','nombre','stockSize', 'price', 'discount','rating','status']

  constructor(
    private nav:NavbarService,
    private productoService:ProductoService
  ) { }

  ngOnInit(): void {
    
    this.productoService.getProductos().subscribe(
      res =>{
        this.productos = res;
        console.log(res);
        
      }, err =>{
        console.log(err);
      }
    )

    this.nav.show();
  }

}
