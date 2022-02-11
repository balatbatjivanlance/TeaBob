import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { StatusComponent } from './pages/status/status.component';
import { RegisterComponent } from './register/register.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { LandingComponent } from './landing/landing.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { ManageAddonsSizeComponent } from './admin/manage-addons-size/manage-addons-size.component';
import { RegisterDriverComponent } from './admin/register-driver/register-driver.component';
import { HistoryComponent } from './admin/history/history.component';
import { ViewOrderComponent } from './home/view-order/view-order.component';
import { ManageDriverComponent } from './admin/manage-driver/manage-driver.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'snacks', component: SnacksComponent},
  { path: 'order', component: OrderComponent},
  { path: 'cart', component: CartComponent},
  { path: 'status', component: StatusComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin-register', component: AdminRegisterComponent},
  { path: 'register-driver', component: RegisterDriverComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'manage-product', component: ManageProductComponent},
  { path: 'manage-addons', component: ManageAddonsSizeComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'view-order', component: ViewOrderComponent},
  { path: 'manage-driver', component: ManageDriverComponent},
 
  { path: '', component: LandingComponent},



  {path: 'sample', component: SampleComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  SnacksComponent,
  OrderComponent,
  CartComponent,
  StatusComponent,
  ProfileComponent,
  
]
