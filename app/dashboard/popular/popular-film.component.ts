import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
    selector: 'popular-film',
    moduleId: module.id,
    templateUrl: 'popular-film.component.html'
})

export class PopularFilmComponent implements OnInit{
    filmList: any[] = [];

    constructor(private popularFilmService: FilmService) { }

    ngOnInit(){
        this.getPopularFilms();
    }

    private getPopularFilms(): void {
        this.popularFilmService.getPopularFilms()
            .subscribe(
                (films: any[]) => {
                    if (films && films.length) {
                        console.log(films);
                        this.filmList = films;
                    }
                },
                (error: any) => {
                    console.log(error);
                }
            );
    }
}
