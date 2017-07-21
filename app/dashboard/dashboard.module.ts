import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { RoutingModule } from './dashboard.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PopularFilmCardComponent } from './popular-film-card/popular-film-card.component';
import { DetailsFilmCardComponent } from './details-film-card/details-film-card.component';
import { SearchComponent } from './search/search.component';
import { SearchFilmComponent } from './search-film-card/search-film-card.component';
import { FilmService } from './film.service';
import { FormatString } from './pipes/format-string.pipe';
import { ExtractElements } from './pipes/extract-elements.pipe';
import { ConvertBudget } from './pipes/convert-budget.pipe'

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RoutingModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [
        MODULE_COMPONENTS,
        SearchComponent,
        PopularFilmCardComponent,
        DetailsFilmCardComponent,
        SearchFilmComponent,
        FormatString,
        ExtractElements,
        ConvertBudget
    ],
    exports: [SearchComponent],
    providers: [FilmService]
})

export class DashboardModule{}
