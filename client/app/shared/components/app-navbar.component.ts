import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'app-navbar',
    template: `
        <nav class="app-navbar-component">
            <a routerLink="/quotes">All Quotes</a>
            <a routerLink="/categories">Categories</a>
            <a routerLink="/movies">Movies</a>
            <a *ngIf="!isLogged" routerLink="/login">Login</a>
            <a *ngIf="isLogged" (click)="onLogout()">Logout</a>
        </nav>
    `
})

export class AppNavbarComponent implements OnInit, OnDestroy {
    
    constructor(private _auth: AuthService) {}

    isLogged: boolean = false
    private _isLoggedSubscription: Subscription

    ngOnInit() {
        this._isLoggedSubscription = this._auth.isLogged$.subscribe(isLogged => {
            this.isLogged = isLogged
        })
    }

    ngOnDestroy() {
        this._isLoggedSubscription.unsubscribe()
    }

    async onLogout() {
        try {
            this._auth.unAuthorize()
        }
        catch(err) {
            console.log(err)
        }
    }
}