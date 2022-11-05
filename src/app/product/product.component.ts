
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
 
  Productary: Product[] = [];
Productformgroup: FormGroup;
constructor(private prodservice: ProductService,private jwtHelper: JwtHelperService,private fb: FormBuilder) { 
  this.Productformgroup = this.fb.group({
    id:[""],
    productName: [""],
    productCategory: [""],
    price: [""],
    images:[""]
   

  })
}

ngOnInit(): void {
  this.getproducts();
}
getproducts(){
 this.prodservice.GetProduct().subscribe(response => {
   console.log(response);
    this.Productary = response;
  })
}
Onsubmit() {
  console.log(this.Productformgroup.value);
  if(this.Productformgroup.value.Id !=null && this.Productformgroup.value.Id !=""){
    this.prodservice.UpdateProduct(this.Productformgroup.value).subscribe(response => {
      console.log(response);
      this.getproducts();
      this.Productformgroup.setValue({
             id :"",
        productName:"",
        productCategory:"",
        price:"",
        images:""
       

      })
    })
  }
  else{
    this.prodservice.CreateProduct(this.Productformgroup.value).subscribe(response => {
      console.log(response);
      this.getproducts();
      this.Productformgroup.setValue({
        id :"",
        productName:"",
        productCategory:"",
        price:"",
        images:""
       

      })
    })
  }
 
}

 Fillform(prod:Product){
  this.Productformgroup.setValue({
    id :prod.id,
    productName:prod.productName,
    productCategory:prod.productCategory,
    price:prod.price,
    images:prod.images

  })

 }
 DeleteProd(id:string){
  this.prodservice.DeleteProduct(id).subscribe(res => {
    console.log(res);
    this.getproducts();
  })
 }

  
  
}

