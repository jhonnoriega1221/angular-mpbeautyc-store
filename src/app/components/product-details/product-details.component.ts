import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, GuardsCheckStart, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Producto } from '../../interfaces/Producto';
import { Opinion } from '../../interfaces/Opinion';
import { Pregunta } from '../../interfaces/Pregunta';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:string;
  producto:Producto;
  preguntas:Pregunta[] = new Array();
  opiniones:Opinion[] = new Array();

  constructor(
    public apiService:ApiService,
    public router:Router,
    public activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.activeRoute.params.subscribe(params => {
      this.id = params['id'];

      //Producto
      this.apiService.getProducto(this.id).subscribe(
        res =>{
          this.producto = res;
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      );

      //Preguntas
      this.apiService.getPreguntas(this.id).subscribe(
        res =>{
          this.preguntas = res;
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      );

      this.apiService.getOpiniones(this.id).subscribe(
        res =>{
          this.opiniones = res;
          console.log(res);
        },
        err =>{
          console.log(err);
        }
      );

     });
  }
}
