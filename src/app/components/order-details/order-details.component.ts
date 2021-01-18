import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from '../../interfaces/Pedido';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  id:string;
  pedido:Pedido;

  constructor(private apiService:ApiService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.id = params['id']
      this.apiService.getPedido(this.id).subscribe(
        res =>{
          this.pedido=res;
          console.log(res);
        }, err =>{
          console.log(err);
        }
      )
    })
  }

}
