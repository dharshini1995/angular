import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FamilyComponent } from './family/family.component';
import { ProductsComponent } from './shop/products/products.component';
import { CatalogComponent } from './shop/catalog/catalog.component';
import {RouterModule } from "@angular/router";
import { TodoComponent } from './task/todo/todo.component';
import {FormsModule }  from "@angular/forms";
import { ApiComponent } from './http/api/api.component';
import {RemotecallService} from "./remotecall.service"
import {} 
import {} 
@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    ProductsComponent,
    CatalogComponent,
    TodoComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClie

    RouterModule.forRoot([
      {
        path:"catalog",
        component:CatalogComponent
      },
      {
        path:"products",
        component:ProductsComponent
      },
      {
        path:"todo",
        component:TodoComponent

      },
      {
        path:"remote",
        component:ApiComponent
      }
     
    ]),
  ],
  providers: [RemotecallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
