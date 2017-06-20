import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PopularFilmComponent } from './popular/popular-film.component';
import { UserComponent } from './favorites/user.component';
import { TableComponent } from './table/table.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'popular', component: PopularFilmComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: '', redirectTo: 'popular', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    PopularFilmComponent,
    UserComponent,
    TableComponent,
];
