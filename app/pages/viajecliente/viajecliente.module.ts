import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeclientePageRoutingModule } from './viajecliente-routing.module';

import { ViajeclientePage } from './viajecliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeclientePageRoutingModule
  ],
  declarations: [ViajeclientePage]
})
export class ViajeclientePageModule {}
