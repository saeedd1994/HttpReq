import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}
  public getWikiApi(term: string) {
    return this.http.get('https://en.wikipedia.org/w/api.php',
      {
        params: {
          action: 'query',
          list: 'search',
          srsearch: term,
          format: 'json',
          origin: '*'
        }
      })
  }
}
