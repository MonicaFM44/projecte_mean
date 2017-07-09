import { OnInit, Component, ViewChild, OnDestroy } from "@angular/core";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Quote } from "../shared/models/quote.model";
import { QuoteFormComponent } from "./components/quote-form.component";
import { AuthService } from "../shared/services/auth.service";
import { Subscription } from "rxjs/Subscription";


@Component({
    selector: "random-quote",
    template: `
        <section class="quote-list-component container" *ngIf="quotes">
            <h1 class="text-center">All the Quotes</h1>
            <div class="text-center">
                <a *ngIf="isLogged" (click)="onAddNewQuote()" class="btn btn-add">
                    <i class="material-icons">add</i> 
                    <span>Add new</span> 
                </a>
            </div>
            <br>
            <ul class="quote-list">
                <li *ngFor="let quote of quotes">
                    <div class="quote">"{{ quote.text }}"</div>
                    <div class="author">- {{ quote.character }}</div>
                    <div class="action-buttons">
                        <a *ngIf="isLogged" (click)="onEditQuote(quote)">
                            <i class="material-icons">mode_edit</i>
                        </a>
                    </div>
                </li>
            </ul>
            <quote-form 
                #quoteForm
                (onSubmitted)="onNewQuoteAdded($event)"
                (onUpdated)="onQuoteUpdated($event)" 
            ></quote-form>
        </section>
    `
}) 
export class QuotesListComponent implements OnInit, OnDestroy {
    
    quotes: Quote[]

    @ViewChild(QuoteFormComponent)
    quoteForm: QuoteFormComponent

    isLogged: boolean = false
    private _isLoggedSubscription: Subscription

    constructor(private _api: QuotesApiService, private _auth: AuthService) {}

    async ngOnInit() {
        this._isLoggedSubscription = this._auth.isLogged$.subscribe(isLogged => {
            this.isLogged = isLogged
        })
        try {
            this.quotes = await this._api.getQuotes()
        }
        catch(err) {
            //
        }
    }

    ngOnDestroy() {
        this._isLoggedSubscription.unsubscribe()
    }       

    onAddNewQuote() {
        this.quoteForm.open()
    }

    onEditQuote(quote:Quote) {
        this.quoteForm.open(quote)
    }

    onNewQuoteAdded(quote: Quote) {
        this.quotes.push(quote)
        this.quoteForm.close()
    }

    onQuoteUpdated(quote: Quote) {
        let i = this.quotes.findIndex(q => q.id == quote.id)
        this.quotes[i] = quote
        this.quoteForm.close()
    }
}