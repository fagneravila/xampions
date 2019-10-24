import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  { path: 'usuario', loadChildren: './usuario/usuario.module#UsuarioPageModule' },
  { path: 'add-atletas', loadChildren: './add-atletas/add-atletas.module#AddAtletasPageModule' },
  { path: 'add-atletas/:id/:nome/:senha/:usuario/:nivel/:idtbtime', loadChildren: './add-atletas/add-atletas.module#AddAtletasPageModule' },
  { path: 'add-times', loadChildren: './add-times/add-times.module#AddTimesPageModule' },
  { path: 'add-times/:id/:descricao/:ativo', loadChildren: './add-times/add-times.module#AddTimesPageModule' },
  { path: 'mostrar-times', loadChildren: './mostrar-times/mostrar-times.module#MostrarTimesPageModule' },
  { path: 'mostrar-times/:id/:descricao/:ativo', loadChildren: './mostrar-times/mostrar-times.module#MostrarTimesPageModule' },
  { path: 'mostrar-atletas', loadChildren: './mostrar-atletas/mostrar-atletas.module#MostrarAtletasPageModule'},
  { path: 'mostrar-atletas/:id/:nome/:senha/:usuario/:nivel/:idtbtime', loadChildren: './mostrar-atletas/mostrar-atletas.module#MostrarAtletasPageModule' },
  { path: 'add-jogos', loadChildren: './add-jogos/add-jogos.module#AddJogosPageModule' },
  { path: 'add-jogos/:id/:localjogo/:datajogo/:valor/:idtbtime', loadChildren: './add-jogos/add-jogos.module#AddJogosPageModule' },
  { path: 'mostrar-jogos', loadChildren: './mostrar-jogos/mostrar-jogos.module#MostrarJogosPageModule' },
  { path: 'mostrar-jogos/:id/:localjogo/:datajogo/:valor/:idtbtime', loadChildren: './mostrar-jogos/mostrar-jogos.module#MostrarJogosPageModule' },   
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
