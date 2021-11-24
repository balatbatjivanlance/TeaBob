import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatBadgeModule} from '@angular/material/badge';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCardModule} from '@angular/material/card';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { CartDialogComponent } from './pages/cart/cart-dialog/cart-dialog/cart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SnacksDialogComponent } from './pages/snacks/snacks-dialog/snacks-dialog/snacks-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { StatusDialogComponent } from './pages/status/status-dialog/status-dialog/status-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    LandingNavComponent,
    CartDialogComponent,
    SnacksDialogComponent,
    StatusDialogComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
