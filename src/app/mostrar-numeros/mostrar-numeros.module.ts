import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MostrarNumerosPage } from './mostrar-numeros.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarNumerosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MostrarNumerosPage]
})
export class MostrarNumerosPageModule {}
