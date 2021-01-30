import { Component, OnInit } from '@angular/core';
import { AllAnimesService } from '../all-animes.service';
import { AnimesFavoritosService } from '../animes-favoritos.service';
import { AnimesFavoritosComponent } from '../animes-favoritos/animes-favoritos.component';

@Component({
  selector: 'app-all-animes',
  templateUrl: './all-animes.component.html',
  styleUrls: ['./all-animes.component.css']
})
export class AllAnimesComponent implements OnInit {

  animes:any[]=[];
  totalAnimes:number;
  page=1;
  test="nada a declarar";
  exibir=[];
  loading: boolean;
  constructor(
    private allAnimes: AllAnimesService,
    private animesfavoritos: AnimesFavoritosService
    
    ) {

   }

  ngOnInit() {
this.getAnimes();
this.exibir=this.animes;

  }

  favoritarAnime(anime){
    this.animesfavoritos.setAnimesFavoritos(anime);
    console.log(this.animesfavoritos);
    alert('Anime Favoritado');
}
  //Pegar todos os animes
  getAnimes(){
    this.loading=true;
    this.allAnimes.getAllAnimes(10,this.page+0)
    .subscribe((response:any)=>{
      this.totalAnimes+=response.meta.count;
      response.data.forEach(animes => {
        this.allAnimes.getAnime(animes.id)
        .subscribe((uniqResponse:any)=>{
          this.animes.push(uniqResponse.data);
          this.loading=false;
          console.log(animes);
        })
        
      });
    })

  }

}


