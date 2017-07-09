import { OnInit, Component } from "@angular/core";
import { Quote } from '../shared/models/quote.model';
import { Movie } from '../shared/models/movie.model';
import { QuotesApiService } from '../shared/services/quotes-api.service';



@Component({
    selector: "random-quote",
    template: `
        <div class="random-quote-component" *ngIf="randomQuote">
            <h1 class="quote">"{{ randomQuote.text }}"</h1>
            <div class="author">
                - {{ randomQuote.character }}<br> {{ randomQuote.movie.title }} ({{ randomQuote.movie.year }})
            </div>
            <a class="btn" (click)="onShowRandomQuote()"><i class="material-icons">refresh</i></a>
        </div>
    `
}) 
export class RandomQuoteComponent implements OnInit {
    
    quotes: Quote[]
    randomQuote: Quote

    constructor(private _api: QuotesApiService) {}

    async ngOnInit() {
        try {
            this.quotes = await this._api.getQuotes()
        }
        catch(err) {
            //
        }
        this.onShowRandomQuote()
    }
    
    onShowRandomQuote() {
        if (!this.quotes) return
        this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)]
    }
}