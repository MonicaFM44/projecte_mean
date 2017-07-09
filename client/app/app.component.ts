import { Component, OnInit } from "@angular/core";

@Component({
    selector: "main-app",
    template: `
    <div>
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {
}