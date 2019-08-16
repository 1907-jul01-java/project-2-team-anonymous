import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
<<<<<<< HEAD
import { UpdateComponent} from './admin/update/update.component';

const routes: Routes = [
    { path: "", component: HomeComponent, children: [{ path: "signup", component: SignupComponent }] },
    { path: "user/:id", component: UserComponent, children: [{ path: "account", component: AccountComponent }, { path: "cart", component: CartComponent }, { path: "shop", component: ShopComponent }, {path:"shop/shop/:id", component: CheckproductComponent}] },
    { path: "admin", component: AdminloginComponent },
    { path: "admin/:id", component: AdminComponent, children: [{ path: "product", component: ProductComponent }, { path: "transaction", component: TransactionComponent }, { path: "inventory", component: InventoryComponent }] },
    { path: "admin/:id", component: AdminComponent, children: [{ path: "inventory", component: InventoryComponent }, { path: "inventory", component: InventoryComponent }, {path:"inventory/update/:id", component: UpdateComponent}] },
=======

const routes: Routes = [
    { path: "", component: HomeComponent, children: [{ path: "signup", component: SignupComponent }] },
    { path: "user/:id", component: UserComponent, children: [{ path: "account", component: AccountComponent }, { path: "cart", component: CartComponent }, { path: "shop", component: ShopComponent }, {path:"shop/:id", component: CheckproductComponent}] },
    { path: "admin", component: AdminloginComponent },
    { path: "admin/:id", component: AdminComponent, children: [{ path: "product", component: ProductComponent }, { path: "transaction", component: TransactionComponent }, { path: "inventory", component: InventoryComponent }] }
>>>>>>> JackieBranch
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
