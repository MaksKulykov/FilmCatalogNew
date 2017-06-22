import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FilmService } from '../film.service';

@Component({
    selector: 'film-details',
    moduleId: module.id,
    templateUrl: 'film-details.component.html'
})

export class FilmDetailsComponent implements OnInit{
    filmDetails: any[] = [];

    constructor(
        private filmService: FilmService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(){
        this.getFilmDetails();
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
}
