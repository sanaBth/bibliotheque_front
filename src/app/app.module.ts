import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { LoginComponent } from './page/login/login.component';
import { LivreComponent } from './page/livre/livre.component';
import { CategorieComponent } from './page/categorie/categorie.component';
import { UsersComponent } from './page/users/users.component';
import { AddusersComponent } from './page/addusers/addusers.component';
import { AddcategorieComponent } from './page/addcategorie/addcategorie.component';
import { AddlivreComponent } from './page/addlivre/addlivre.component';
import { HeaderComponent } from './page/header/header.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { RegisteradminComponent } from './page/registeradmin/registeradmin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    LivreComponent,
    CategorieComponent,
    UsersComponent,
    AddusersComponent,
    AddcategorieComponent,
    AddlivreComponent,
    HeaderComponent,
    RegisteradminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
