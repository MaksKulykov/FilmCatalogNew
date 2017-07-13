import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { PopularFilms } from '../models/popularFilms';

@Component({
    selector: 'popular-film',
    moduleId: module.id,
    templateUrl: 'popular-film.component.html'
})

export class PopularFilmComponent implements OnInit{
    filmPopularList: PopularFilms[] = [];
    isLoaded: boolean;

    constructor(private filmService: FilmService) { }

    ngOnInit(){
        this.isLoaded = false;
        this.getPopularFilms();
    }

    private getPopularFilms(): void {
        this.filmService.getPopularFilms()
            .subscribe(
                (films: any[]) => {
                    if (films && films.length) {
                        this.filmPopularList = films;
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );
        this.isLoaded = true;
    }
}
