import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public getApi(term: string){
    return this.http.get('http://en.wikipedia.org/w/api.php')
  }
}
