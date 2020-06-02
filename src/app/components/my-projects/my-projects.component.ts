import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  description = "Hello";

  showModal() {
    this.isOpen = true;
  }

  hideModal() {
    this.isOpen = false;
  }
}
