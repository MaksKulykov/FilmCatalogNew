import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

import { PopularFilmCardComponent } from './popular-film-card/popula-film-card.component';

@NgModule({
    imports: [
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [
        MODULE_COMPONENTS,
        PopularFilmCardComponent
    ]
})

export class DashboardModule{}
