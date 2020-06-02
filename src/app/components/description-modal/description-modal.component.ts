import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.scss']
})
export class DescriptionModalComponent implements OnInit {
  @Input() description: string;
  @Input() isOpen: boolean = false;

  @Output() cancel = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCancel() {
    this.cancel.emit();
  }
}
