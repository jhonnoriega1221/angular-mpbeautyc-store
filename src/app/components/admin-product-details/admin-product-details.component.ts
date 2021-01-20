import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ApiService } from '../../services/api.service';
import { Producto } from 'src/app/interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  id:string;

  producto:Producto;
  marcas:any[] =[
    {value:'0', view:'Avon'},
    {value:'1', view:'Pantene'},
    {value:'2', view:'Head Sholder'}
  ]

  categorias:any[] =[
    {value:'0', view:'Shampoo'},
    {value:'1', view:'Colonia'},
    {value:'2', view:'Pomada'}
  ]

  constructor(
    public nav:NavbarService,
    private apiService:ApiService,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe( params =>{
      this.id = params['id'];
      this.apiService.getProducto(this.id).subscribe(
        res =>{
          console.log(res);
          this.producto = res;
        }, err =>{
          console.log(err);
        }
      )
    }
      
    )
    
    this.nav.show();
  }

}
