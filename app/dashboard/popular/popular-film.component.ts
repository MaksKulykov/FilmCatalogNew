import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
    selector: 'popular-film',
    moduleId: module.id,
    templateUrl: 'popular-film.component.html'
})

export class PopularFilmComponent implements OnInit{
    filmPopularList: any[] = [];
    isLoaded: boolean;

    constructor(private popularFilmService: FilmService) { }

    ngOnInit(){
        this.isLoaded = false;
        this.getPopularFilms();
    }

    private getPopularFilms(): void {
        this.popularFilmService.getPopularFilms()
            .subscribe(
                (films: any[]) => {
                    if (films && films.length) {
                        console.log(films);
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
