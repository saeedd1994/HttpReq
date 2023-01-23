import {Component} from '@angular/core';
import {WikipediaService} from "./services/wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages:any[]=[];
  constructor(private wikipediaService: WikipediaService) {
  }

  onTerm(event: string) {
    this.wikipediaService.getWikiApi(event).subscribe((response: any)=>{
      this.pages= response.query.search;
    })
  }
}

