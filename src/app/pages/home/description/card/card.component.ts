import { NavigateService } from 'src/app/services/navigate.service';
import { Component, OnInit, Input } from '@angular/core';
import * as homeConstants from 'src/app/constants/home.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData;

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
  }

  onCardClick(url: string) {
    console.log(url)
    this.navigateService.navigateByUrl( url );
  }

}
