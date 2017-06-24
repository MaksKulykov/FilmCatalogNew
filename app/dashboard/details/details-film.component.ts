import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FilmService } from '../film.service';

@Component({
    selector: 'film-details',
    moduleId: module.id,
    templateUrl: 'details-film.component.html'
})

export class FilmDetailsComponent implements OnInit{
    filmDetails: any[] = [];
    actors: any[] = [];

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
                (filmDetails: any) => {
                    console.log(filmDetails);
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
                (actors: any) => {
                    console.log(actors);
                    this.actors = actors;
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }
}
