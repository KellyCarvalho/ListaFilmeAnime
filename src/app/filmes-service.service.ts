import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesServiceService {

  constructor() { }

  getFilmes(){
    return [
      {
      id:1,
      data: '20-02-2001',
      nome: 'A volta dos que não foram'
    },
    {
      id:2,
      data: '20-02-2002',
      nome: 'A volta dos que vieram'
    }
  
  ]
  }
}
