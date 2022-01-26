import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryHistoryPageRoutingModule } from './delivery-history-routing.module';

import { DeliveryHistoryPage } from './delivery-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryHistoryPageRoutingModule
  ],
  declarations: [DeliveryHistoryPage]
})
export class DeliveryHistoryPageModule {}
