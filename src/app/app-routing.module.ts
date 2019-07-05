import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importamos guard que sirve para
//no permitir ingreso al usuario
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadChildren: './home/home.module#HomePageModule', 
    canActivate: [AuthGuard] //agregamos esto a la ruta que vamos a proteger
  },
  { path: 'details/:id', loadChildren: 
  './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path:'details', loadChildren: 
  './pages/todo-details/todo-details.module#TodoDetailsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { 
    path: 'admin', 
    loadChildren: './admin/admin.module#AdminPageModule',
    canActivate: [AuthGuard] //ruta protegida
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
