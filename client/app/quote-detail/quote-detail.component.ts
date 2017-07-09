import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Quote } from "../shared/models/quote.model";


@Component({
    selector: 'quote-detail',
    template: `
        <section class="quote-detail-component container" *ngIf="quote">
            <h1 class="text-center">{{ quote.text }}</h1>
            {{ quote.character }}
        </section>
    `
})

export class QuoteDetailComponent implements OnInit {
    
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _api: QuotesApiService 
    ) { }

    private _routeSubscription: Subscription

    quote: Quote

    ngOnInit() {
        this._routeSubscription = this._route.params.subscribe( async param => {
            try {
                this.quote = await this._api.getQuote(param.id)
            } catch (error) {
                this._router.navigate(["404"], { skipLocationChange: true })
            }
        }) 
    }

    ngOnDestroy() {
        this._routeSubscription.unsubscribe()
    }
}