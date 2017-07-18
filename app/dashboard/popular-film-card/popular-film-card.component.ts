import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PopularFilms } from '../models/popularFilms';

@Component({
    selector: 'popular-film-card',
    moduleId: module.id,
    templateUrl: 'popular-film-card.component.html',
    styleUrls: ['popular-film-card.component.css']
})
export class PopularFilmCardComponent implements OnInit {
    @Input()
    filmPopularList: PopularFilms[];

    constructor(private router: Router) { }

    ngOnInit() { }

    gotoDetail(id: string): void {
        this.router.navigate(['/details', id]);
    }

}