import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Movie } from "../shared/models/movie.model";


@Component({
    selector: 'movie-detail',
    template: `
        <section class="movie-detail-component container" *ngIf="movie">
            <h1 class="text-center">{{ movie.title }}</h1>
            <div class="description text-center">{{ movie.year }}</div>
            <br>
            <h3 class="text-center">Quotes in this movie:</h3>
            <ul class="quote-list">
                 <li *ngFor="let quote of movie.quotes">
                    <div class="quote">"{{ quote.text }}"</div>
                    <div class="author">- {{ quote.character }}</div>
                </li>
            </ul>
            <div class="text-center">
                <a class="btn" routerLink="/movies">
                    <i class="material-icons">arrow_back</i> Go Back
                </a>
            </div>
        </section>
        <div class="full-page-loader text-center" *ngIf="!movie">
            <i class="material-icons">donut_large</i>
        </div>
    `
})

export class MovieDetailComponent implements OnInit {
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _api: QuotesApiService 
    ) { }

    private _routeSubscription: Subscription

    movie: Movie

    ngOnInit() {
        this._routeSubscription = this._route.params.subscribe( async param => {
            try {
                this.movie = await this._api.getMovie(param.id)
            } catch (error) {
                this._router.navigate(["404"], { skipLocationChange: true })
            }
        }) 
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe()
    }
}