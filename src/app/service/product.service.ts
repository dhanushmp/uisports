import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  baseurl = "https://localhost:5001/api/product";
  GetProduct(): Observable<Product[]> {
    return this.httpclient.get<Product[]>(this.baseurl)
  }
  CreateProduct(prod: Product): Observable<Product> {
    prod.id="0";
    return this.httpclient.post<Product>(this.baseurl, prod)
  }
  UpdateProduct(prod: Product):Observable<Product> {
   return this.httpclient.put<Product>(this.baseurl + '/' + prod.id, prod);

  }
  DeleteProduct(id: string):Observable<Product> {
    return this.httpclient.delete<Product>(this.baseurl + '/' + id);
 
   }
}