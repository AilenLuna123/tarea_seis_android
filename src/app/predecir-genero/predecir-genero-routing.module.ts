import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PredecirGeneroPage } from './predecir-genero.page';

const routes: Routes = [
  {
    path: '',
    component: PredecirGeneroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredecirGeneroPageRoutingModule {}
