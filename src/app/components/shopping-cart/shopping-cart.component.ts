import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router} from '@angular/router';

import { ShoppingCart } from '../../interfaces/ShoppingCart';
import { Producto } from '../../interfaces/Producto';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCart:any[] = new Array();
  subtotal = 0;
  shippingCost:number;
  total:number;


  constructor(private apiService:ApiService, private router:Router) { 
  }

  ngOnInit(): void {
    this.apiService.getShoppingCart().subscribe(
      res =>{
        const shoppingCartProducts = res[0].products; //Me recibe la info del carrito de compras de la base de datos

        //Obtiene los productos correspondientes al carrito de compras
        this.apiService.getProductos().subscribe( //Me consulta todos los productos de la base de datos
          res =>{
            for(let i=0; i<shoppingCartProducts.length;i++){
              for(let j=0; j<res.length;j++){
                if(shoppingCartProducts[i].productId == res[j]._id){
                  this.shoppingCart.push({
                    productId:shoppingCartProducts[i].productId,
                    productImg:res[j].imgUrl,
                    productName:res[j].name,
                    productQty:shoppingCartProducts[i].quantity,
                    productPrice:res[j].actualPrice,
                    productOldPrice:res[j].originalPrice,
                    discount:res[j].discount,
                    productTotal: shoppingCartProducts[i].quantity*res[j].actualPrice,
                  });
                  this.subtotal += this.shoppingCart[i].productTotal;
                  console.log(this.shoppingCart)
                }
                //OPTIMIZAR PETICIONES HTTP
              }
            }
            this.shippingCost = 9000;
            this.total = this.subtotal + this.shippingCost;
          }
        )

      }
    )
  }

  deleteItem(productId:string){
    this.apiService.deleteShoppingCartitem(productId).subscribe(
      res =>{
        window.location.reload();
      },
      err =>{
        console.log(err);
      }
    )
  }

  realizarPedido(){
    this.router.navigate(['/checkout']);
  }

}
