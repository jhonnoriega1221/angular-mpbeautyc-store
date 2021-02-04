import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { PedidoService } from '../../services/pedido.service';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'src/app/interfaces/Pedido';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-admin-clients-order-details',
  templateUrl: './admin-clients-order-details.component.html',
  styleUrls: ['./admin-clients-order-details.component.css']
})
export class AdminClientsOrderDetailsComponent implements OnInit {

  id:string;
  pedido:Pedido;

  constructor(
    public nav:NavbarService,
    private pedidoService:PedidoService,
    private activeRoute:ActivatedRoute,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res =>{
        this.id = res['id'];
        this.pedidoService.getPedido(this.id).subscribe(
          res =>{
            this.pedido=res[0];
            console.log(res[0]);
          }, err =>{
            console.log(err);
          }
        )
      }
    )

    this.nav.show();

  }

  updatePedido(msg:string){
    this.pedidoService.updatePedido(this.id).subscribe(
      res =>{
        this.snackbar.open(msg,null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });

        this.activeRoute.params.subscribe(
          res =>{
            this.id = res['id'];
            this.pedidoService.getPedido(this.id).subscribe(
              res =>{
                this.pedido=res[0];
                console.log(res[0]);
              }, err =>{
                console.log(err);
              }
            )
          }
        )
      }
    )
  }

  cancelPedido(msg:string){
    this.pedidoService.cancelPedido(this.id).subscribe(
      res =>{
        this.snackbar.open(msg,null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
        this.activeRoute.params.subscribe(
          res =>{
            this.id = res['id'];
            this.pedidoService.getPedido(this.id).subscribe(
              res =>{
                this.pedido=res[0];
                console.log(res[0]);
              }, err =>{
                console.log(err);
              }
            )
          }
        )
      }
    )
  }



}
