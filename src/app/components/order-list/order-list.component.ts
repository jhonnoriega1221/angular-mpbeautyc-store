import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../interfaces/Pedido';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  pedidos:Pedido[] = new Array();

  constructor(private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.apiService.getPedidosUsuario().subscribe(
      res=>{
        this.pedidos = res;
        console.log(this.pedidos);
      }
    )
  }

  goToPedido(id:string){
    this.router.navigate(['/profile/order/',id])
  }

}
