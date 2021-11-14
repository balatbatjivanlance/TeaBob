import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { DrinksComponent } from './pages/drinks/drinks.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { StatusComponent } from './pages/status/status.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'snacks', component: SnacksComponent},
  { path: 'drinks', component: DrinksComponent},
  { path: 'cart', component: CartComponent},
  { path: 'status', component: StatusComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'landing', component: LandingComponent},

  { path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  SnacksComponent,
  DrinksComponent,
  CartComponent,
  StatusComponent,
  ProfileComponent,
  
]