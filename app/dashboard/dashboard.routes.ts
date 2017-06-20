import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PopularFilmComponent } from './popular/popular-film.component';
import { FilmDetailsComponent } from './details/film-details.component';
import { TableComponent } from './table/table.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'popular', component: PopularFilmComponent },
    { path: 'details', component: FilmDetailsComponent },
    { path: 'table', component: TableComponent },
    { path: '', redirectTo: 'popular', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    PopularFilmComponent,
    FilmDetailsComponent,
    TableComponent,
];
