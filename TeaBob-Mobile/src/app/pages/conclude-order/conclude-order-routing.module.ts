import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConcludeOrderPage } from './conclude-order.page';

const routes: Routes = [
  {
    path: '',
    component: ConcludeOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConcludeOrderPageRoutingModule {}
