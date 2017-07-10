import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'popular-film-card',
    moduleId: module.id,
    templateUrl: 'popular-film-card.component.html',
    styleUrls: ['popular-film-card.component.css']
})
export class PopularFilmCardComponent implements OnInit {
    @Input()
    filmPopularList: any[];

    constructor(private router: Router) { }

    ngOnInit() { }

    gotoDetail(id: string): void {
        this.router.navigate(['/details', id]);
    }

}