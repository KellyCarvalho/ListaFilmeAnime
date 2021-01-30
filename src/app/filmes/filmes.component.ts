import { Component, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { FavoritosService } from '../favoritos.service';
import { FilmesServiceService } from '../filmes-service.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit, OnChanges {

  filmes =[];
  favoritos =[];

  @Output() click = new EventEmitter();
  

  constructor(
    private filmeService: FilmesServiceService,
    private favoritosService: FavoritosService
  ) {

   }

  ngOnInit(){

    this.filmes=this.filmeService.getFilmes();
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
 favoritar(filme){
this.favoritos=filme;

this.favoritosService.setFavoritos(this.favoritos);

alert('Filme Favoritado');


 }



}
