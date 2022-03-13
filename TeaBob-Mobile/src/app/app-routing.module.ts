import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './services/guard.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    ,    canActivate: [GuardGuard]
  },
  {
    path: 'delivery-history',
    loadChildren: () => import('./pages/delivery-history/delivery-history.module').then( m => m.DeliveryHistoryPageModule)
    ,    canActivate: [GuardGuard]
  },
  {
    path: 'view-order',
    loadChildren: () => import('./pages/view-order/view-order.module').then( m => m.ViewOrderPageModule)
    ,    canActivate: [GuardGuard]
  },
  {
    path: 'conclude-order',
    loadChildren: () => import('./pages/conclude-order/conclude-order.module').then( m => m.ConcludeOrderPageModule)
    ,    canActivate: [GuardGuard]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
