import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() submittedInput = new EventEmitter<string>()
  term: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onFormSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.submittedInput.emit(this.term);
  }
}
