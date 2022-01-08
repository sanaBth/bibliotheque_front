import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guard/user.guard';
import { AddcategorieComponent } from './page/addcategorie/addcategorie.component';
import { AddlivreComponent } from './page/addlivre/addlivre.component';
import { AddusersComponent } from './page/addusers/addusers.component';
import { CategorieComponent } from './page/categorie/categorie.component';
import { HomeComponent } from './page/home/home.component';
import { LivreComponent } from './page/livre/livre.component';
import { LoginComponent } from './page/login/login.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { RegisteradminComponent } from './page/registeradmin/registeradmin.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'admin', component: RegisteradminComponent },
  { path: 'index', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UsersComponent },
  { path: 'adduser', component: AddusersComponent, canActivate: [UserGuard] },
  { path: 'addlivre', component: AddlivreComponent, canActivate: [UserGuard] },
  { path: 'addcategorie', component: AddcategorieComponent, canActivate: [UserGuard] },
  { path: 'livre', component: LivreComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
