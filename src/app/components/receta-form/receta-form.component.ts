import { Component, OnInit } from '@angular/core';

import {RecetaService} from '../../services/receta.service';
import { Receta } from 'src/app/models/receta';

@Component({
  selector: 'app-receta-form',
  templateUrl: './receta-form.component.html',
  styleUrls: ['./receta-form.component.css']
})
export class RecetaFormComponent implements OnInit {

  receta = {} as Receta;

  constructor(public RecetaService: RecetaService){

  }

  ngOnInit() {
    
  }

  addReceta(){
    if (this.receta.name !== '' && this.receta.description !== '' &&
    this.receta.price != 0) {
      this.RecetaService.addReceta(this.receta);
      this.receta = {} as Receta;

    }
   
  }

}