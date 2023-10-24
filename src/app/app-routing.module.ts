import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'home',
    loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
