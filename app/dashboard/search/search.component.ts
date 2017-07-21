import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'search',
    moduleId: module.id,
    templateUrl: './search.component.html',
})
export class SearchComponent {
    filmName: string;

    constructor(
        private router: Router
    ) { }

    goToSearchFilms(): void {
        this.router.navigate(['/search', this.filmName]);
    }
}
