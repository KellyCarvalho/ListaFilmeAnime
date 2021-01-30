import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllAnimesService {

  constructor( 
    private http: HttpClient
    ) { }

    getAllAnimes(limit:number,offset:number){
      return this.http.get(`https://kitsu.io/api/edge/anime?page$limit=${limit}&page${offset}`);
    }
    getAnime(id:number){
      return this.http.get(`https://kitsu.io/api/edge/anime/${id}`)    }
}
