import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'jogo', loadChildren: './jogo/jogo.module#JogoPageModule' },
  { path: 'numeros', loadChildren: './numeros/numeros.module#NumerosPageModule' },
  { path: 'pagamentos', loadChildren: './pagamentos/pagamentos.module#PagamentosPageModule' },
  { path: 'time', loadChildren: './time/time.module#TimePageModule' },
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
