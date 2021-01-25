import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ProductoService } from '../../services/producto.service';
import { Router} from '@angular/router';

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


  constructor(
    private shoppingCartService:ShoppingCartService,
    private productoService:ProductoService,
    private router:Router) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe(
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
    this.shoppingCartService.deleteShoppingCartitem(productId).subscribe(
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
