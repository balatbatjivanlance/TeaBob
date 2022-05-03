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
import { ManageAddonsSizeComponent } from './admin/manage-addons-size/manage-addons-size.component';
import { RegisterDriverComponent } from './admin/register-driver/register-driver.component';
import { HistoryComponent } from './admin/history/history.component';
import { ViewOrderComponent } from './home/view-order/view-order.component';
import { ManageDriverComponent } from './admin/manage-driver/manage-driver.component';
import { ManageAdminComponent } from './admin/manage-admin/manage-admin.component';
import { SalesReportComponent } from './admin/sales-report/sales-report.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AuthGuard } from './services/auth.guard';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,    canActivate: [AuthGuard],},
  { path: 'snacks', component: SnacksComponent,    canActivate: [AuthGuard]},
  { path: 'order', component: OrderComponent,    canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent,    canActivate: [AuthGuard]},
  { path: 'status', component: StatusComponent,    canActivate: [AuthGuard]},
  { path: 'profile', component: ProfileComponent,    canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'admin-register', component: AdminRegisterComponent},
  { path: 'register-driver', component: RegisterDriverComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add-product', component: AddProductComponent,    canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent,    canActivate: [AuthGuard]},
  { path: 'category', component: CategoryComponent,    canActivate: [AuthGuard]},
  { path: 'manage-product', component: ManageProductComponent,    canActivate: [AuthGuard]},
  { path: 'manage-addons', component: ManageAddonsSizeComponent,    canActivate: [AuthGuard]},
  { path: 'history', component: HistoryComponent,    canActivate: [AuthGuard]},
  { path: 'view-order', component: ViewOrderComponent,    canActivate: [AuthGuard]},
  { path: 'manage-driver', component: ManageDriverComponent,    canActivate: [AuthGuard]},  
  { path: 'manage-admin', component: ManageAdminComponent,    canActivate: [AuthGuard]}, 
  { path: 'sales', component: SalesReportComponent,    canActivate: [AuthGuard]},  
  { path: 'aboutus', component: AboutusComponent,    canActivate: [AuthGuard]},
  { path: 'manage-users', component: ManageUsersComponent,    canActivate: [AuthGuard]},
  
  { path: '', component: LandingComponent}



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
