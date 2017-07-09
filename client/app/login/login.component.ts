import { Component, OnInit } from '@angular/core';
import { User } from "../shared/models/user.model";
import { QuotesApiService } from "../shared/services/quotes-api.service";
import { Router } from '@angular/router';
import { AuthService } from "../shared/services/auth.service";

@Component({
    selector: 'login',
    template: `
        <section class="login-component container">
            <h1 class="text-center">Login</h1>
            <form novalidate #login="ngForm">
            <div class="form-field">
                <label for="email">Email:</label>
                <input 
                    placehloder="Email"
                    type="text" 
                    name="email"
                    #email="ngModel"
                    required
                    minlength="11"
                    [(ngModel)]="user.email"
                >
                <div *ngIf="email.invalid && email.dirty">
                        Please, enter your email.
                </div>
            </div>
            <div class="form-field">
                <label for="password">Password:</label>
                <input 
                    placehloder="Password"
                    type="password" 
                    name="password"
                    #password="ngModel"
                    required
                    minlength="4"
                    [(ngModel)]="user.password"
                >
                <div *ngIf="password.invalid && password.dirty">
                        A password is required.
                </div>
            </div>
            <div class="form-field text-right">
                <a class="btn" 
                (click)="onSendLogin()"
                [class.inactive]="login.form.invalid"
                >
                Login
                </a>
            </div>
            </form>
        </section>
    `
})

export class LoginComponent {

    user: User = new User()

    constructor(
        private _api: QuotesApiService, 
        private _router: Router,
        private _auth: AuthService
    ) { }

    async onSendLogin() {
        try {
            await this._api.login(this.user)
            this._auth.announceIsLogged()
            this._router.navigate([""])
        }
        catch(e) {
            console.log(e)
        }
    }
}