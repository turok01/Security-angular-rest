import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubstListComponent} from "./subst-list/subst-list.component";
import {AppComponent} from "./app.component";
import {RecentComponent} from "./recent/recent.component";
import {ByIdComponent} from "./by-id/by-id.component";
import {UpdateComponent} from "./update/update.component";
import {AddComponent} from "./add/add.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path:'login', component : LoginComponent},
  {path:'rest/add', component : AddComponent},
  {path:'rest/select', component : SubstListComponent},
  {path:'rest/recent', component : RecentComponent},
  {path:'rest/:id', component : ByIdComponent},
  {path:'rest/update/:id', component : UpdateComponent},
  {path:'rest/home', component : HomeComponent}

  //{path: '**', component : AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
