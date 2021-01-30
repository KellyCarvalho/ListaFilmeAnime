import { Component, OnInit } from '@angular/core';
import { AnimesFavoritosService } from '../animes-favoritos.service';

@Component({
  selector: 'app-animes-favoritos',
  templateUrl: './animes-favoritos.component.html',
  styleUrls: ['./animes-favoritos.component.css']
})
export class AnimesFavoritosComponent implements OnInit {
animesFavoritos =null;
loading :boolean;
  constructor(private animeFavoritosService: AnimesFavoritosService) { }

  ngOnInit() {
    this.loading=true;
    if(this.animesFavoritos==null){
      this.animesFavoritos=this.animeFavoritosService.getAnimesFavoritos();
    }else{
      this.animesFavoritos.push(this.animeFavoritosService.getAnimesFavoritos());

    }
    this.loading=false;
    console.log(this.animesFavoritos);
  }

  desfavoritarAnime(anime){
    this.animesFavoritos.splice(this.animesFavoritos.indexOf(anime.id),1);
    alert('Filme removido dos favoritos!');
  }

}
