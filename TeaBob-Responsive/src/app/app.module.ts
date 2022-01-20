import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { SnacksDialogComponent } from './pages/snacks/snacks-dialog/snacks-dialog/snacks-dialog.component';
import { DrinksDialogComponent } from './pages/snacks/drinks-dialog/drinks-dialog/drinks-dialog.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDialogComponent } from './pages/profile/profile-dialog/profile-dialog.component';
import { StatusComponent } from './pages/status/status.component';
import { OrdersModalComponent } from './orders-modal/orders-modal.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';

// Material Imports
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { ViewOrdersComponent } from './admin/view-orders/view-orders.component';
import { UpdateFoodComponent } from './admin/update-food/update-food.component';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { ManageAddonsSizeComponent } from './admin/manage-addons-size/manage-addons-size.component';
import { UpdateAddonsComponent } from './admin/manage-addons-size/update-addons/update-addons.component';
import { UpdateSizeComponent } from './admin/manage-addons-size/update-size/update-size.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    RegisterComponent,
    AdminRegisterComponent,
    LoginComponent,
    LandingComponent,
    LandingNavComponent,
    SnacksDialogComponent,
    DrinksDialogComponent,
    ProfileComponent,
    ProfileDialogComponent,
    StatusComponent,
    OrdersModalComponent,
    AddProductComponent,
    DashboardComponent,
    CategoryComponent,
    ManageProductComponent,
    ViewOrdersComponent,
    UpdateFoodComponent,
    UpdateCategoryComponent,
    SampleComponentComponent,
    AdminRegisterComponent,
    ManageAddonsSizeComponent,
    UpdateAddonsComponent,
    UpdateSizeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatBadgeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
