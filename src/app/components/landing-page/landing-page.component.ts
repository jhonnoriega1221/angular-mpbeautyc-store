import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Producto } from '../../interfaces/Producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  productosNuevos:Producto[] = new Array();
  productosOferta:Producto[] = new Array();
  productosMasVendidos:Producto[] = new Array();


  constructor(
    public apiService:ApiService,
    public router:Router
    ) { }

  ngOnInit(): void {
    


    //ULTIMOS PRODUCTOS       

    this.apiService.getProductos().subscribe(
      res => {
        if(res.length > 4)
          this.productosNuevos = res.splice(0,4);
        else
          this.productosNuevos = res;

          console.log(this.productosNuevos);

      },
      err => {
        console.log(err);
      }
    );

    //OFERTA
    this.apiService.getProductos().subscribe(
      res => {

        res.sort((a,b) =>{
          return b.discount - a.discount;
        })

        if(res.length > 4)
          this.productosOferta = res.splice(0,4);
        else
          this.productosOferta = res;


      },
      err => {
        console.log(err);
      }
    );

    //MAS VENDI2
    this.apiService.getProductos().subscribe(
      res => {
        res.sort(function(a,b){ return (b.soldTimes - a.soldTimes)});

          if(res.length > 4)
            this.productosMasVendidos = res.splice(0,4);
          else
            this.productosMasVendidos = res;
      },
      err => {
        console.log(err);
      }
    );

  }

  goToProduct(id:string){
    this.router.navigate(['/product/',id]);
  }

}
