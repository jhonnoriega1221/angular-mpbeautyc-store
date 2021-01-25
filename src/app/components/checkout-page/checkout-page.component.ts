import { Component, OnInit } from '@angular/core';
import { UsuarioService} from '../../services/usuario.service';
import { ShoppingcartService} from '../../services/shoppingcart.service';
import { PedidoService} from '../../services/pedido.service';
import { ProductoService} from '../../services/producto.service';

import { Usuario } from '../../interfaces/Usuario';
import { Router} from '@angular/router';  
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  userInfo:Usuario;
  shoppingCart:any[] = new Array();
  shippingCost:number;
  subtotal:number = 0;
  total:number = 0;
  quantityTotal:number = 0;


  constructor(
    private usuarioService:UsuarioService,
    private shoppingcartService:ShoppingcartService,
    private pedidoService:PedidoService,
    private productoService:ProductoService,

    private router:Router
    ) { }

  ngOnInit(): void {

    this.usuarioService.getUsuario().subscribe(
      res =>{
        this.userInfo = res;
      }, err =>{
        console.log(err);
      }
    )

    this.shoppingcartService.getShoppingCart().subscribe(
      res =>{
        const shoppingCartProducts = res[0].products; //Me recibe la info del carrito de compras de la base de datos

        //Obtiene los productos correspondientes al carrito de compras
        this.productoService.getProductos().subscribe( //Me consulta todos los productos de la base de datos
          res =>{
            for(let i=0; i<shoppingCartProducts.length;i++){
              for(let j=0; j<res.length;j++){
                if(shoppingCartProducts[i].productId == res[j]._id){
                  this.shoppingCart.push({
                    productId:shoppingCartProducts[i].productId,
                    productName:res[j].name,
                    imgUrl:res[j].imgUrl,
                    oldPrice:res[j].originalPrice,
                    actualPrice:res[j].actualPrice,
                    discount:res[j].discount,
                    quantity:shoppingCartProducts[i].quantity,
                    totalProduct: shoppingCartProducts[i].quantity*res[j].actualPrice,
                  });
                  this.quantityTotal += this.shoppingCart[i].quantity;
                  this.subtotal += this.shoppingCart[i].totalProduct;
                }
                //OPTIMIZAR PETICIONES HTTP
              }
            }
            this.shippingCost = 9000;
            this.total = this.subtotal + this.shippingCost;
          },
          err =>{
            console.log(err);
          }
        )

      },err =>{
        console.log(err);
      }
    )
  }

  realizarPedido(){
    this.pedidoService.realizarPedido(this.shippingCost,this.subtotal,this.total,this.shoppingCart).subscribe(
      res =>{
        const id:any = res;
        this.router.navigate(['/profile/order/',id.pedido._id]);
      }
    )
  }

}
