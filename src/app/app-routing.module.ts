import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
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
  { path: 'usu', loadChildren: './features/usuarios/usuarios.module#UsuariosPageModule' },
   {
    path: 'usuarios',
    loadChildren: () => import ('./usuarios/usuarios.module').then(m => m.UsuariosPageModule) },
  // { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: '', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
