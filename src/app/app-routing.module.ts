import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CartComponent } from './cart/cart.component';

import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'customer', component: CustomerComponent,canActivate: [AuthGuard] },
  {path:'home',component:HomeComponent,canActivate: [AuthGuard] },
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent,canActivate: [AuthGuard]},
  {path:'order',component:OrderComponent},
  {path:'cart',component:CartComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
