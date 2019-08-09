import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SignupComponent} from './home/signup/signup.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './user/account/account.component';
import { CartComponent } from './user/cart/cart.component';
import { ShopComponent } from './user/shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [
	{path: "", component: HomeComponent, children:[{path: "signup",component: SignupComponent }]},
	{path: "user/:id", component: UserComponent, children:[{path:"account", component: AccountComponent},{path:"cart", component: CartComponent},{path:"shop",component: ShopComponent}]},
	{path: "admin", component: AdminloginComponent},
	{path: "admin/:id", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
