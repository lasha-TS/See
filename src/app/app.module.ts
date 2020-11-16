import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { GeorgianfilmsComponent } from './films/georgianfilms/georgianfilms.component';
import { AnimationsComponent } from './films/animations/animations.component';
import { AnimeComponent } from './films/anime/anime.component';
import { FilmComponent } from './films/film/film.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { NewComponent } from './new/new.component';
import { ChildComponent } from './child/child.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    CardComponent,
    HeaderComponent,
    GeorgianfilmsComponent,
    AnimationsComponent,
    AnimeComponent,
    FilmComponent,
    TvseriesComponent,
    NewComponent,
    ChildComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
