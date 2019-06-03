import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas = [];
  editingReceta: Receta;
  editing: boolean = false;

  constructor(public recetaService: RecetaService) { }

  ngOnInit() {
    this.recetaService.getRecetas().subscribe(recetas => {
      console.log(recetas);
      this.recetas = recetas;
    });
  }

  deleteReceta(event, receta){
   if(confirm('Estas seguro de querer eliminarlo?')){
    this.recetaService.deleteReceta(receta);
   }
  }

  editReceta(event, receta){
    this.editingReceta = receta;
    this.editing = !this.editing;
  }
//
  updateReceta(){
    this.recetaService.updateReceta(this.editingReceta);
    this.editingReceta = {} as Receta;
    this.editing = false;
  }

}
