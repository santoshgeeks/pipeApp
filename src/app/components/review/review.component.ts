import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() public inputData;
  constructor() { }

  ngOnInit() {
    console.log('InputData: ', this.inputData);
  }

}
