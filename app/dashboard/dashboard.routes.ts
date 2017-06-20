import { Route } from '@angular/router';
import { PopularFilmComponent } from './popular/popular-film.component';
import { FilmDetailsComponent } from './details/film-details.component';
import { FavoriteFilmsComponent } from './favorite/favorite-films.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'popular', component: PopularFilmComponent },
    { path: 'details', component: FilmDetailsComponent },
    { path: 'favorite', component: FavoriteFilmsComponent },
    { path: '', redirectTo: 'popular', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    PopularFilmComponent,
    FilmDetailsComponent,
    FavoriteFilmsComponent,
];
