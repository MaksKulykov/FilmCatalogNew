import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './popular/home.component';
import { UserComponent } from './favorites/user.component';
import { TableComponent } from './table/table.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: HomeComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
];
