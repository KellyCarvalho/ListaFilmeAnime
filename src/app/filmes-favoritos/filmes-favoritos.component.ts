import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-filmes-favoritos',
  templateUrl: './filmes-favoritos.component.html',
  styleUrls: ['./filmes-favoritos.component.css']
})
export class FilmesFavoritosComponent implements OnInit {
   favoritos = null;
  constructor(
    private favoritosService:FavoritosService
  ) { }

  ngOnInit() {
   
    if(this.favoritos==null){
      this.favoritos=this.favoritosService.getFavoritos();
    }else{
      this.favoritos.push(this.favoritosService.getFavoritos());

    }
    console.log(this.favoritos )
  }

  remover(filme){
    this.favoritos.splice(this.favoritos.indexOf(filme.nome),1);
    alert('Filme removido dos favoritos!');
    console.log(this.favoritos)
  }



}
