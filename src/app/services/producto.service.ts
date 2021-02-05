import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URI = environment.URI;

  constructor(
    private http:HttpClient
  ) { }

  getProductos(){
    return this.http.get<Producto[]>(this.URI + "producto");
  }

  getProducto(id:string){
      return this.http.get<Producto>(this.URI + "producto/" + id);
  }

  searchProducto(query:string){
    return this.http.get<Producto[]>(this.URI + "busqueda=" + query);
  }

  updateProducto(id,updateProductData, brand, category){

    const updatedProducto = {
      "name":updateProductData.productName,
      "category":{
        "categoryIndex":updateProductData.productCategory,
        "categoryName":category
      },
      "brand" : {
        "brandIndex":updateProductData.productBrand,
        "brandName":brand
      },
      "description":updateProductData.productDescription,
      "originalPrice":updateProductData.productPrice,
      "discount":updateProductData.productDiscount,
      "stockSize":updateProductData.productStockSize
    }

    return this.http.put(this.URI+"producto/"+id,updatedProducto)
  }

  createProducto(productData, brandName, categoryName, photo:File){
    const fd = new FormData();

    fd.append('name',productData.productName);
    fd.append('categoryIndex',productData.productCategory);
    fd.append('categoryName',categoryName);
    fd.append('brandIndex',productData.productBrand);
    fd.append('brandName',brandName);
    fd.append('description',productData.productDescription);
    fd.append('originalPrice',productData.productPrice);
    fd.append('discount',productData.productDiscount);
    fd.append('stockSize',productData.productStockSize);
    fd.append('image',photo);

     return this.http.post(this.URI+"producto",fd) 
  }

  unsubscribeProduct(id){
    return this.http.delete(this.URI+"producto/"+id)
  }

  subscribeProduct(id){
    return this.http.post(this.URI+"producto/"+id,null)
  }
}
