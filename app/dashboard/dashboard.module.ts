import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { RoutingModule } from './dashboard.routes';
import { HttpModule } from '@angular/http';

import { PopularFilmCardComponent } from './popular-film-card/popular-film-card.component';
import { DetailsFilmCardComponent } from './details-film-card/details-film-card.component';
import { FilmService } from './film.service';
import { FormatString } from './pipes/format-string.pipe'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RoutingModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [
        MODULE_COMPONENTS,
        PopularFilmCardComponent,
        DetailsFilmCardComponent,
        FormatString
    ],
    providers: [FilmService]
})

export class DashboardModule{}
