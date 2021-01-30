import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  filmesFavoritos=[];

  constructor() { }

  setFavoritos(filme){
this.filmesFavoritos.push(filme);
  }

  getFavoritos(){
    return this.filmesFavoritos;
  }
}
