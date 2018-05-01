import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class PlaceholderService {

  constructor(private _http:Http) { }

  getNews()
  {
    return this._http.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=de5e83bb476a47afb2759869845af1f1").map(data => data.json());
  }


}
