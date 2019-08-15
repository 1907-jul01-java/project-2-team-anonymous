import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './user/account/account.component';
import { CartComponent } from './user/cart/cart.component';
import { ShopComponent } from './user/shop/shop.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ProductComponent } from './admin/product/product.component';
import { TransactionComponent } from './admin/transaction/transaction.component';
import { InventoryComponent } from './admin/inventory/inventory.component';
import { CheckproductComponent } from './user/checkproduct/checkproduct.component';
import { UpdateComponent } from './admin/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    UserComponent,
    AccountComponent,
    CartComponent,
    ShopComponent,
    AdminComponent,
    AdminloginComponent,
    ProductComponent,
    TransactionComponent,
    InventoryComponent,
    CheckproductComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
