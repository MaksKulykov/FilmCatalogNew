import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

import { FilmService } from '../film.service';
import { PopularFilms } from '../models/popularFilms';

@Component({
    selector: 'search-film',
    moduleId: module.id,
    templateUrl: 'search-film-card.component.html',
    styleUrls: ['search-film-card.component.css']
})

export class SearchFilmComponent implements OnInit{
    searchFilms: PopularFilms[];

    constructor(
        private filmService: FilmService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.searchFilms = [];
        this.getSearchFilms();
    }

    private getSearchFilms(): void {
        this.route.params
        .switchMap((params: Params) => this.filmService.getSearchFilms(params['filmName']))
            .subscribe(
                (searchFilms: PopularFilms[]) => {
                    if (searchFilms && searchFilms.length) {
                        this.searchFilms = searchFilms;
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    gotoDetail(id: string): void {
        this.router.navigate(['/details', id]);
    }
}
