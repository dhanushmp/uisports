import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

import { CustomerService } from '../service/customer.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
 
    Customerary: Customer[] = [];
   
  Customerformgroup: FormGroup;
  constructor(private cusservice: CustomerService,private jwtHelper: JwtHelperService,private fb: FormBuilder) { 
    this.Customerformgroup = this.fb.group({
      id: [""],
     productId:[""],
      customerName: [""],
      address: [""],
      whatsupno: [""]
     

    })
  }
  
  ngOnInit(): void {
    this.getcustomers();
  }
  getcustomers(){
    this.cusservice.GetCustomer().subscribe(response => {
      console.log(response);
      this.Customerary = response;
    })
  }
  Onsubmit() {
    console.log(this.Customerformgroup.value);
    if(this.Customerformgroup.value.Id !=null && this.Customerformgroup.value.Id !=""){
      this.cusservice.UpdateCustomer(this.Customerformgroup.value).subscribe(response => {
        console.log(response);
        this.getcustomers();
        this.Customerformgroup.setValue({
               id :"",
               productId:"",
          customerName:"",
          address:"",
          whatsupno:""
         
  
        })
      })
    }
    else{
      this.cusservice.CreateCustomer(this.Customerformgroup.value).subscribe(response => {
        console.log(response);
        this.getcustomers();
        this.Customerformgroup.setValue({
          id :"",
          productId:"",
          customerName:"",
          address:"",
          whatsupno:""
         
  
        })
      })
    }
   
  }
   Fillform(cus:Customer){
    this.Customerformgroup.setValue({
      id :cus.id,
  productId:cus.productId,
      customerName:cus.customerName,
      address:cus.address,
      whatsupno:cus.whatsupno

    })

   }
   DeleteCus(id:string){
    this.cusservice.DeleteCustomer(id).subscribe(res => {
      console.log(res);
      this.getcustomers();
    })
   }

    
    
  }
 
  
  
 
