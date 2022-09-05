import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'inicio-cliente',
    loadChildren: () => import('./pages/inicio-cliente/inicio-cliente.module').then( m => m.InicioClientePageModule)
  },
  {
    path: 'registrocliente',
    loadChildren: () => import('./pages/registrocliente/registrocliente.module').then( m => m.RegistroclientePageModule)
  },
  {
    path: 'viajecliente',
    loadChildren: () => import('./pages/viajecliente/viajecliente.module').then( m => m.ViajeclientePageModule)
  },
  {
    path: 'inicio-conductor',
    loadChildren: () => import('./pages/inicio-conductor/inicio-conductor.module').then( m => m.InicioConductorPageModule)
  },
  {
    path: 'inicioviaje',
    loadChildren: () => import('./pages/inicioviaje/inicioviaje.module').then( m => m.InicioviajePageModule)
  },
  {
    path: 'iniciarviaje',
    loadChildren: () => import('./pages/iniciarviaje/iniciarviaje.module').then( m => m.IniciarviajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
