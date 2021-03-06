import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductFormComponent } from './components/product-form/product-form.component';
//import { ProductsComponent } from './components/products/products.component';

import {  AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RecetaFormComponent } from './components/receta-form/receta-form.component';
import { RecetasComponent } from './components/recetas/recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    //ProductFormComponent,
    //ProductsComponent,
    RecetaFormComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
