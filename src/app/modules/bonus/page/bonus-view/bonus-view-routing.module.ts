import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BonusViewPage } from './bonus-view.page';

const routes: Routes = [
  {
    path: '',
    component: BonusViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusViewPageRoutingModule {}
