import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ChildComponent } from './child/child.component';
import { AnimationsComponent } from './films/animations/animations.component';
import { AnimeComponent } from './films/anime/anime.component';
import { FilmComponent } from './films/film/film.component';
import { GeorgianfilmsComponent } from './films/georgianfilms/georgianfilms.component';
import { NewComponent } from './new/new.component';
import { RegisterComponent } from './register/register.component';
import { TvseriesComponent } from './tvseries/tvseries.component';

const routes: Routes = [
  { path: 'main', component: CardComponent },
  { path: 'film', component: FilmComponent },
  { path: 'georgianfilm', component: GeorgianfilmsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'tvseries', component: TvseriesComponent },
  { path: 'new', component: NewComponent },
  { path: 'child', component: ChildComponent },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
