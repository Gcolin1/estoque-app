import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaProdutoService } from './layout/home/home.service';
import { MatTableModule } from '@angular/material/table';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MovimentacaoComponent } from './layout/movimentacao/movimentacao.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    SidebarComponent,
    MovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, 
    NgIf, 
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
