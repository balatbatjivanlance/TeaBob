import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryHistoryPage } from './delivery-history.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryHistoryPageRoutingModule {}
