import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

import { appRoutes } from "./routes";
import { CategoryDetailComponent } from "./category-detail/category-detail.component";
import { NotFoundComponent } from "./errors/not-found.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { QuotesApiService } from "./shared/services/quotes-api.service";
import { QuotesListComponent } from "./quotes-list/quotes-list.component";
import { QuoteFormComponent } from "./quotes-list/components/quote-form.component";
import { LoginComponent } from "./login/login.component";
import { AuthService } from "./shared/services/auth.service";
import { RandomQuoteComponent } from './random-quote/random-quote.component';
import { AppNavbarComponent } from "./shared/components/app-navbar.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CategoryDetailComponent,
        RandomQuoteComponent,
        CategoryListComponent,
        NotFoundComponent,
        QuotesListComponent,
        QuoteFormComponent,
        LoginComponent,
        AppNavbarComponent,
        MovieListComponent,
        MovieDetailComponent
    ],
    providers: [
        AuthService,
        QuotesApiService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
