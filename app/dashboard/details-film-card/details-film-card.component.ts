import { Component, Input } from '@angular/core';

@Component({
    selector: 'details-film-card',
    moduleId: module.id,
    templateUrl: 'details-film-card.component.html',
    styleUrls: ['details-film-card.component.css']
})

export class DetailsFilmCardComponent {
    @Input()
    filmDetails: any;
    @Input()
    actors: Array<any>;

    constructor() { }

    getElements(data: Array<any>): string {
        let list: string = '';
        data.forEach(element => {
            list += element.name + ', ';
        });
        return list.slice(0, -2);
    }

}