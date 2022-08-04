import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { EquipeComponent } from './pages/equipe/equipe.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { PanierPageComponent } from './pages/panier-page/panier-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  
  { path:'home' , canActivate:[AuthGuard],  component: HomePageComponent, children: [
    {  path:'equipe', component:EquipeComponent },
    {  path:'about', component:AboutComponent },
      
  ] },
  { path:'produit', canActivate:[AuthGuard] , component: ProductPageComponent },
  { path:'panier', canActivate:[AuthGuard] , component: PanierPageComponent },
  { path:'login', component: LoginComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
