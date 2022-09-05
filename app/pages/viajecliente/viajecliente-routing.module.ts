import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeclientePage } from './viajecliente.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeclientePageRoutingModule {}
