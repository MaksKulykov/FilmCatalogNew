import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FilmService {
    private url: string = 'https://api.themoviedb.org/3/movie/popular';
    private apiKey: string = '0077bec633f957fbf7cd91c9c7026b27';
    private language: string = 'en-US';
    private pageNumber: string = '1';
    constructor(private http: Http) { }

    private extractListData(res: Response): Array<any> {
        let body = res.json();
        return body.results || {};
    }

    getPopularFilms(): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('api_key', this.apiKey);
        params.set('language', this.language);
        params.set('page', this.pageNumber);
        return this.http.get(this.url, {search: params}).map(this.extractListData)
            .catch((error: any)=> { return Observable.throw(error);});
    }
}