import { OnInit, Component } from "@angular/core";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Movie } from "../shared/models/movie.model";

@Component({
    selector: "movie-list",
    template: `
        <section class="movie-list-component container" *ngIf="movies">
            <h1 class="text-center">Quote movies</h1>
            <ul>
                <li *ngFor="let movie of movies">
                    <a routerLink="/movies/{{ movie.id }}">{{ movie.title }}</a>
                </li>
            </ul>
        </section>
        <div class="full-page-loader text-center" *ngIf="!movies">
            <i class="material-icons">donut_large</i>
        </div>
    `
})
export class MovieListComponent implements OnInit{

    constructor(private _api: QuotesApiService) {}

    movies: Movie[]

    async ngOnInit() {
        try {
            this.movies = await this._api.getMovies()
        } catch (error) {
            //
        }
    }
}