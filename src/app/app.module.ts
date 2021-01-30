    import { LOCALE_ID, NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import{registerLocaleData} from '@angular/common';
    import localeBr from '@angular/common/locales/global/pt';
    import { MatSliderModule } from '@angular/material/slider';
    import { AppComponent } from './app.component';
    import { FilmesComponent } from './filmes/filmes.component';
    import { from } from 'rxjs';
    import { FilmesFavoritosComponent } from './filmes-favoritos/filmes-favoritos.component';
    import { AppRoutingComponent } from './app-routing/app-routing.component';
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
    import {HttpClientModule} from '@angular/common/http';
import { AnimesFavoritosComponent } from './animes-favoritos/animes-favoritos.component';
import { AllAnimesComponent } from './all-animes/all-animes.component';
import { NgxPaginationModule } from 'ngx-pagination';
    registerLocaleData(localeBr,'pt');
    @NgModule({
      declarations: [
        AppComponent,
        FilmesComponent,
        FilmesFavoritosComponent,
        AnimesFavoritosComponent,
        AllAnimesComponent,
        
      ],
      imports: [
        BrowserModule,
        AppRoutingComponent,
        BrowserAnimationsModule,
        MatSliderModule,
        HttpClientModule,
        NgxPaginationModule,
      ],
      providers: [
      {provide: LOCALE_ID, useValue:'pt'}
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
