import { Component, Input } from '@angular/core';

import { FilmDetails } from '../models/filmDetails';
import { Actors } from  '../models/actors';

@Component({
    selector: 'details-film-card',
    moduleId: module.id,
    templateUrl: 'details-film-card.component.html',
    styleUrls: ['details-film-card.component.css']
})

export class DetailsFilmCardComponent {
    @Input()
    filmDetails: FilmDetails;
    @Input()
    actors: Actors[];

}