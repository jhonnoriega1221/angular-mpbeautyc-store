import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

import { Producto } from '../../interfaces/Producto';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  busqueda:string;
  query:string; //Para lo que se buscó

  productos:Producto[] = new Array();

  constructor( private apiService:ApiService, private router:Router, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
      this.activeRoute.params.subscribe(params =>{
        this.query = params['query'];
        this.apiService.searchProducto(this.query).subscribe(
          res =>{
            this.productos = res;
          },
          err => {
            console.log(err);
          }
        )
        this.busqueda = params['query'];
      })
  }

  buscarProductos(busqueda:string){
    if(busqueda != "")
      this.router.navigate(['/search/',busqueda]);
  }

  goToProduct(id:string){
    this.router.navigate(['/product/',id]);
  }

}
