import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FilmService } from '../film.service';
import { FilmDetails } from '../models/filmDetails';
import { Actors } from '../models/actors';

@Component({
    selector: 'film-details',
    moduleId: module.id,
    templateUrl: 'details-film.component.html'
})

export class FilmDetailsComponent implements OnInit{
    filmDetails: FilmDetails;
    actors: Actors[] = [];

    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(){
        this.getFilmDetails();
        this.getActors();
    }

    getFilmDetails(): void {
        this.route.params
            .switchMap((params: Params) => this.filmService.getFilmDetails(params['id']))
            .subscribe(
                (filmDetails: FilmDetails) => {
                    this.filmDetails = filmDetails;
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }

    getActors(): void {
        this.route.params
            .switchMap((params: Params) => this.filmService.getActors(params['id']))
            .subscribe(
                (actors: Actors[]) => {
                    this.actors = actors.slice(0, 6);
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }
}
