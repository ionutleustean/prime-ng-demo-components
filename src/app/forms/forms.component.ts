import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //autocomplete

  text: string;
  multipleText: string;

  results: string[];
  multipleResults: string[];

  rawResults: string[] = ['Gigi','Vasile','Marian','Gogu','Guta'];

  search(event) {
    this.results = [];

    if(event.query) {
      this.results = this.rawResults.filter((value) => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    }
    else {
      this.results = this.rawResults;
    }
  }

  handleDropdown(event) {
    this.results = [];

    setTimeout(() => {
      this.search(event);
    }, 100)

  }
  searchMultiple(event) {
    this.multipleResults = [];

    if(event.query) {
      this.multipleResults = this.rawResults.filter((value) => {
        return value.toLowerCase().indexOf(event.query.toLowerCase()) !== -1;
      });
    }
    else {
      this.multipleResults = this.rawResults;
    }
  }

}
