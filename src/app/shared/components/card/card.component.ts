import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title = 'Card Component';
  @Output() foo = new EventEmitter();
  handleClick(e: Event) {
    this.foo.emit(e);
    console.log('CardComponent handleClick() invoked!');
  }
}
