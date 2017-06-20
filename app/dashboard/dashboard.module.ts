import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { HttpModule } from '@angular/http';

import { PopularFilmCardComponent } from './popular-film-card/popula-film-card.component';
import { FilmService } from './film.service'

@NgModule({
    imports: [
        HttpModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [
        MODULE_COMPONENTS,
        PopularFilmCardComponent
    ],
    providers: [FilmService]
})

export class DashboardModule{}
