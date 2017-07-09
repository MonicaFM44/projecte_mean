import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Quote } from "../models/quote.model";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable()
export class QuotesApiService {

    constructor(private _http:Http, private _router: Router) {}

    _get(url):Promise<any> {
        return this._http.get("/api/" + url)
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => {
                            if(error.status === 401) {
                                this._router.navigate(["login"])
                            }
                            throw error
                        })
    }

    _post(url, data):Promise<any> {
        return this._http.post("/api/" + url, data)
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => {
                            if(error.status === 401) {
                                this._router.navigate(["login"])
                            }
                            throw error
                        })
    }

    _put(url, data):Promise<any> {
        return this._http.put("/api/" + url, data)
                        .toPromise()
                        .then(response => response.json())
                        .catch(error => {
                            if(error.status === 401) {
                                this._router.navigate(["login"])
                            }
                            throw error
                        })
    }

    login(user:User):Promise<any> {
        return this._post("login", user)
    }

    getQuotes():Promise<any> {
        return this._get("quotes")
    }
    getQuote(id:string):Promise<any> {
        return this._get("quotes/" + id)
    }
    postQuote(quote:Quote):Promise<any> {
        return this._post("quotes", quote)
    }
    putQuote(quote:Quote):Promise<any> {
        return this._put("quotes/" + quote.id, quote)
    }


    getCategories():Promise<any> {
        return this._get("categories")
    }
    getCategory(id:string):Promise<any> {
        return this._get("categories/" + id)
    }

    getMovies():Promise<any> {
        return this._get("movies")
    }
    getMovie(id:string):Promise<any> {
        return this._get("movies/" + id)
    }
}