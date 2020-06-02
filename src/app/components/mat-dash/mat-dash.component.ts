import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mat-dash',
  templateUrl: './mat-dash.component.html',
  styleUrls: ['./mat-dash.component.scss']
})
export class MatDashComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
@Input() cardsDetails: [];
cards;
cards2;
cards3;

ngOnInit() {
  this.cards = this.cardsDetails;
  this.cards2 = this.cardsDetails;
  this.cards3 = this.cardsDetails;
}
  // cards = [
  //   { title: 'Bruno', name: 'Bruno' ,cols: 1, rows: 1 , imagePath: 'assets/images/dog1.jpg'},
  //   { title: 'Cai', name: 'Cali' , cols: 1, rows: 1 , imagePath: 'assets/images/dog2.jpg'},
  //   { title: 'Puppe', name: 'Pakistan' , cols: 1, rows: 1 , imagePath: 'assets/images/dog3.jpg'},
  //   { title: 'Danger', name: 'Nawab' , cols: 1, rows: 1 , imagePath: 'assets/images/dog4.jpg'}
  // ];

  constructor() {
  }
}
