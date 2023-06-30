import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'predecir-genero',
    loadChildren: () => import('./predecir-genero/predecir-genero.module').then( m => m.PredecirGeneroPageModule)
  },
  {
    path: 'predecir-edad',
    loadChildren: () => import('./predecir-edad/predecir-edad.module').then( m => m.PredecirEdadPageModule)
  },
  {
    path: 'universidades',
    loadChildren: () => import('./universidades/universidades.module').then( m => m.UniversidadesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
