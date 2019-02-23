import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  handleCardImageClick(e: Event) {
    console.log('handleCardImageClick -> ', e);
  }
}
