import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, GuardsCheckStart, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../auth/auth.service';
import { Producto } from '../../interfaces/Producto';
import { Opinion } from '../../interfaces/Opinion';
import { Pregunta } from '../../interfaces/Pregunta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  submitted = false;
  auth:boolean = this.authService.isAuthenticated();
  id:string;
  producto:Producto;
  preguntas:Pregunta[] = new Array();
  opiniones:Opinion[] = new Array();
  question:FormGroup;
  userId:string;

  constructor(
    private authService:AuthService,
    private apiService:ApiService,
    private router:Router,
    private activeRoute:ActivatedRoute,
    private fb:FormBuilder
  ) {
    this.question = this.fb.group({
      userQuestion: ['',[Validators.required, Validators.maxLength(150)]]
    });

   }

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

      this.apiService.getUsuario().subscribe(
        res => this.userId = res._id,
        err => console.log(err)
      )

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

  get f() { return this.question.controls;}

  realizarPregunta(){
    this.submitted = true;
    if(this.question.invalid){
      return;
    }

    this.apiService.realizarPregunta(this.userId, this.producto._id, this.question.value.userQuestion).subscribe(
      res=>{
        window.location.reload();
      },
      err =>{
        console.log(err);
      }
    );
  }
}
