import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SubstListComponent } from './subst-list/subst-list.component';
import { RecentComponent } from './recent/recent.component';
import { ByIdComponent } from './by-id/by-id.component';
import {UpdateComponent} from "./update/update.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddComponent } from './add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    SubstListComponent,
    RecentComponent,
    ByIdComponent,
    UpdateComponent,
    AddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
