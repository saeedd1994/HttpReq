import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() {
    console.log('hello from service constructor')
  }
  show(term: string){
    return `hello from wikipedia : ${term}`
  }
}
