import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { authGuard } from './account/shared/auth.guard';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MovimentacaoComponent } from './layout/movimentacao/movimentacao.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: SidebarComponent,
    children: [
      {path: '', component:  HomeComponent},
      {path: 'movimentacao', component : MovimentacaoComponent},
      {path: 'dashboard', component : DashboardComponent}
    ],  
    //canActivate: [authGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch : 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
