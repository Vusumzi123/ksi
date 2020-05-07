import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import {
  AnimationPlayer,
  AnimationBuilder,
  AnimationMetadata,
  animate,
  style,
} from '@angular/animations';

@Directive({
  selector: '[appApearAnimation]'
})
export class ApearAnimationDirective {

  player: AnimationPlayer;

  /* @Input()
  set show(show: boolean) {
    if (this.player) {
      this.player.destroy();
    }

    const metadata = show ? this.fadeIn() : this.fadeOut();

    const factory = this.animBuilder.build(metadata);
    const player = factory.create(this.el.nativeElement);

    player.play();
  } */

  show = true;

  constructor(private animBuilder: AnimationBuilder, private el: ElementRef) {
    console.log('animation directive constructor');
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  /* ngOnInit() {
    window.addEventListener( 'scroll', this.scroll, true );
    console.log('animation directive onInit');
    
  } */

  private scroll = (event): void => {
    console.log( this.el.nativeElement.offsetTop );
  }

  private fadeIn(): AnimationMetadata[] {
    return [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1, transform: 'translate(0, 0)' })),
    ];
  }

  private fadeOut(): AnimationMetadata[] {
    return [
      style({ opacity: '*' }),
      animate('400ms ease-in', style({ opacity: 0, transform: 'translate(100px, 20px)' })),
    ];
  }

}
