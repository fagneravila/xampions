import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarAtletasPage } from './mostrar-atletas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarAtletasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarAtletasPage]
})
export class MostrarAtletasPageModule {}
