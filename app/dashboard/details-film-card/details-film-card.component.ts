/**
 * Created by User on 22.06.2017.
 */
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'details-film-card',
    moduleId: module.id,
    templateUrl: 'details-film-card.component.html',
    styleUrls: ['details-film-card.component.css']
})
export class DetailsFilmCardComponent implements OnInit {
    @Input()
    filmDetails: any;

    constructor() { }

    ngOnInit() { }

}