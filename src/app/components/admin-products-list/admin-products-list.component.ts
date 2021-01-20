import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
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
    private apiService:ApiService
  ) { }

  ngOnInit(): void {
    
    this.apiService.getProductos().subscribe(
      res =>{
        this.productos = res;
        console.log(this.productos)
      }, err =>{
        console.log(err);
      }
    )

    this.nav.show();
  }

}
