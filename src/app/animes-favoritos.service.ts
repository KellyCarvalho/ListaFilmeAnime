import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimesFavoritosService {
animesFavoritos =[];
  constructor() { }

  setAnimesFavoritos(anime){
    if(this.animesFavoritos==[]){
      this.animesFavoritos=anime;
    }else{
      this.animesFavoritos.push(anime);
    }
  
  }

  getAnimesFavoritos(){
    return this.animesFavoritos;
  }
}
