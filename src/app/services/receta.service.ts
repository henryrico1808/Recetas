import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Receta } from '../models/receta';
import { DomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetasCollection: AngularFirestoreCollection<Receta>;
  recetas : Observable<Receta[]>;
  recetaDoc: AngularFirestoreDocument;

  constructor(public db: AngularFirestore){
    //this.products = this.db.collection('products').valueChanges();
    this.recetasCollection = this.db.collection('recetas');
    this.recetas = this.recetasCollection.snapshotChanges().pipe(map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Receta;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  getRecetas(){
    return this.recetas;
  }

  addReceta(receta: Receta){
    this.recetasCollection.add(receta);
  }

  deleteReceta(receta: Receta){
    this.recetaDoc = this.db.doc(`recetas/${receta.id}`);
    this.recetaDoc.delete();
  }

  updateReceta(receta: Receta){
    this.recetaDoc = this.db.doc(`recetas/${receta.id}`);
    this.recetaDoc.update(receta);
  }


}
