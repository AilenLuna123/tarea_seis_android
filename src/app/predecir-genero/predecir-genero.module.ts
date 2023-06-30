import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PredecirGeneroPageRoutingModule } from './predecir-genero-routing.module';

import { PredecirGeneroPage } from './predecir-genero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PredecirGeneroPageRoutingModule
  ],
  declarations: [PredecirGeneroPage]
})
export class PredecirGeneroPageModule {}
