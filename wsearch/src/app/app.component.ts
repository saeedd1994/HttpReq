import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onTerm(event: string) {
    console.log('hello from parent and emitted propert is : ', event)
  }
}
