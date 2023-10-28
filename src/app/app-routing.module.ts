import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/components/error404/error404.component';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';

const routes: Routes = [
  //Selecccionamos el Enrrutamiento hacia el landing como primera pagina de la aplicacion
  {
    path:'landing',
    component:LandingPageComponent, //cargamos el componente principal del landing
    loadChildren:()=>import('./modules/landing/landing.module').then(m=>m.LandingModule)
  },
  {
    path:'auth',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path:'',
    redirectTo:'landing',
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
