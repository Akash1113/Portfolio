import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  userInput = "Your Questions have been submitted. Our team will contact you in 2 - 3 business days";
  textInput = "";
  isSubmitted = false;

  onAddText(){
    this.textInput = this.userInput;
    this.isSubmitted = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
