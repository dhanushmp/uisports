import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from '../models/customer';
import { ProductComponent } from '../product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient: HttpClient) { }
  baseurl = "https://localhost:5001/api/customer";
  GetCustomer(): Observable<Customer[]> {
    return this.httpclient.get<Customer[]>(this.baseurl)
  }
  CreateCustomer(cus: Customer): Observable<Customer> {
    cus.id="0";
    return this.httpclient.post<Customer>("https://localhost:5001/api/customer?productId="+cus.productId,cus)
  }
  UpdateCustomer(cus: Customer):Observable<Customer> {
   return this.httpclient.put<Customer>(this.baseurl + '/' + cus.id, cus);

  }
  DeleteCustomer(id: string):Observable<Customer> {
    return this.httpclient.delete<Customer>(this.baseurl + '/' + id);
 
   }
}