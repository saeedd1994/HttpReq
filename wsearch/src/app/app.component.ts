import {Component} from '@angular/core';
import {WikipediaService} from "./services/wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private wiki: WikipediaService) {
  }

  onTerm(event: string) {
    console.log('hello from parent and emitted property is : ', event)
    this.wiki.show(event);
  }
}
