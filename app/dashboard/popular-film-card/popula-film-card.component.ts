/**
 * Created by User on 20.06.2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
    selector: 'popular-film-card',
    moduleId: module.id,
    templateUrl: 'popular-film-card.component.html',
    styleUrls: ['popular-film-card.component.css']
})
export class PopularFilmCardComponent implements OnInit {
    @Input()
    filmPopularList: any[];

    constructor(private popularFilmCardService: FilmService) { }

    ngOnInit() { }

}