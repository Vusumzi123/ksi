import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('startAnimation', [
      state('show', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('hide', style({
        transform: 'scale(.4)',
        opacity: 0
      })),
      transition('show => hide', [
        animate('800ms')
      ]),
      transition('hide => show', [
        animate('800ms')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit, AfterViewInit {

  isLogoShowing = false;
  isSloganShowing = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout( ctx => {ctx.isLogoShowing = true; }, 300, this );
    setTimeout((ctx) => { ctx.isSloganShowing = true; } , 1000, this);
  }

}
