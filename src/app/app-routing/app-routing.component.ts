import {NgModule} from '@angular/core';
import{Routes, RouterModule, Router} from '@angular/router';
import { AllAnimesComponent } from '../all-animes/all-animes.component';
import { AnimesFavoritosComponent } from '../animes-favoritos/animes-favoritos.component';
import { FilmesFavoritosComponent } from '../filmes-favoritos/filmes-favoritos.component';
import { FilmesComponent } from '../filmes/filmes.component';
const routes: Routes = [{
  path:'meusfilmes',
  component: FilmesFavoritosComponent,
},
{path:'',
component: FilmesComponent
},
{
  path:'animes',
  component: AllAnimesComponent
},
{
  path:'meusanimes',
  component: AnimesFavoritosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingComponent{

}