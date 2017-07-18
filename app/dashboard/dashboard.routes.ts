import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularFilmComponent } from './popular/popular-film.component';
import { FilmDetailsComponent } from './details/details-film.component';
import { FavoriteFilmsComponent } from './favorite/favorite-films.component';

export const MODULE_ROUTES: Routes =[
    { path: 'popular', component: PopularFilmComponent },
    { path: 'details/:id', component: FilmDetailsComponent },
    { path: 'favorite', component: FavoriteFilmsComponent },
    { path: '', redirectTo: 'popular', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    PopularFilmComponent,
    FilmDetailsComponent,
    FavoriteFilmsComponent,
];
@NgModule({
    imports: [RouterModule.forRoot(MODULE_ROUTES)],
    exports: [RouterModule],
})
export class RoutingModule { }
