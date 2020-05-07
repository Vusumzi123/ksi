import { Component, OnInit } from '@angular/core';
import * as homeConstants from 'src/app/constants/home.constants';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  show = true;
  cardsData = homeConstants.constants.services;
  constructor() {}

  ngOnInit() {
  }

}
