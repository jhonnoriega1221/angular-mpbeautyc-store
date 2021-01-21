import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/interfaces/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-product-details',
  templateUrl: './admin-product-details.component.html',
  styleUrls: ['./admin-product-details.component.css']
})
export class AdminProductDetailsComponent implements OnInit {

  finalPrice:number;
  producto:Producto
  id:string;
  productoStatus:string

  marcas:any[] =[
    {value:'0', view:'Avon'},
    {value:'1', view:'Pantene'},
    {value:'2', view:'Head Sholder'}
  ]

  categorias:any[] =[
    {value:'0', view:'Cremas'},
    {value:'1', view:'Colonia'},
    {value:'2', view:'Pomada'}
  ]

  productForm:FormGroup;


  constructor(
    public nav:NavbarService,
    private apiService:ApiService,
    private activeRoute:ActivatedRoute,
    private fb:FormBuilder,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe( params =>{
      this.id = params['id'];
      this.apiService.getProducto(this.id).subscribe(
        res =>{
          this.producto = res;
          this.productForm = this.fb.group({
            productName:[this.producto.name],
            productCategory:[this.producto.category.categoryIndex],
            productBrand:[this.producto.brand.brandIndex],
            productDescription:[this.producto.description],
            productPrice:[this.producto.originalPrice],
            productDiscount:[this.producto.discount],
            productStockSize:[this.producto.stockSize]
          });
          this.finalPrice = this.productForm.value.productPrice-((this.productForm.value.productPrice*(this.productForm.value.productDiscount/100)));
          if(this.producto.unsubscribed)
            this.productoStatus="Dado de baja"
          else if(this.producto.stockSize==0)
            this.productoStatus="Sin stock"
          else
            this.productoStatus="Disponible"
          this.onChanges();
          
        }, err =>{
          console.log(err);
        }
      )
    }
      
    )
    
    this.nav.show();
  }

  modifyProduct(){
    this.apiService.updateProducto(this.id,this.productForm.value,this.marcas[this.productForm.value.productBrand].view,this.categorias[this.productForm.value.productBrand].view).subscribe(
      res =>{
        this.ngOnInit();
        this.snackbar.open('Producto actualizado',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
      }, err =>{
        console.log(err);
      }
    )
    
  }

  unsubscribeProduct(){
    this.apiService.unsubscribeProduct(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackbar.open('Producto dado de baja',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
      }, err =>{
        console.log(err);
      }
    )
  }

  subscribeProduct(){
    this.apiService.subscribeProduct(this.id).subscribe(
      res =>{
        this.ngOnInit();
        this.snackbar.open('Producto puesto en venta',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
      }, err =>{
        console.log(err);
      }
    )
  }

  onChanges(): void{
    this.productForm.valueChanges.subscribe(val =>{
      this.finalPrice = this.productForm.value.productPrice-((this.productForm.value.productPrice*(this.productForm.value.productDiscount/100)));
    })
  }

}
