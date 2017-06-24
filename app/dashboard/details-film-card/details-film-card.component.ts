/**
 * Created by User on 22.06.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import {element} from "@angular/upgrade/src/angular_js";

@Component({
    selector: 'details-film-card',
    moduleId: module.id,
    templateUrl: 'details-film-card.component.html',
    styleUrls: ['details-film-card.component.css']
})
export class DetailsFilmCardComponent implements OnInit {
    @Input()
    filmDetails: any;
    @Input()
    actors: Array<any>;

    constructor() { }

    ngOnInit() { }

    getElements(data: Array<any>): string {
        let list: string = '';
        data.forEach(element => {
            list += element.name + ', ';
        });
        return list.slice(0, -2);

    }

}