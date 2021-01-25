import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { ProductoService } from '../../services/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Producto } from 'src/app/interfaces/Producto';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

interface HtmlInputEvent extends Event{
	target:HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.css']
})
export class AdminProductAddComponent implements OnInit {

  file:File;
  bufferPhotoSelected:string | ArrayBuffer;
  productForm:FormGroup;
  finalPrice=0;

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

  constructor(
    public nav:NavbarService,
    private productoService:ProductoService,
    private fb:FormBuilder,
    private snackbar:MatSnackBar,
    private router:Router
  ) { 

  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName:[''],
      productCategory:[''],
      productBrand:[''],
      productDescription:[''],
      productPrice:[0],
      productDiscount:[0],
      productStockSize:[0]
    });

    this.onChanges();
    this.nav.show();

  }

  photoSelected(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //preview
      const reader = new FileReader();
      
      reader.onload = e => this.bufferPhotoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
}

  addProduct(){
    this.productoService.createProducto(this.productForm.value,this.marcas[this.productForm.value.productBrand].view,this.categorias[this.productForm.value.productBrand].view, this.file).subscribe(
      res =>{
        console.log(res);
        this.snackbar.open('Producto registrado',null,{
          duration: 3000,
          verticalPosition:"bottom",
          horizontalPosition:"end"
        });
        this.router.navigate(['/admin/products']);

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
