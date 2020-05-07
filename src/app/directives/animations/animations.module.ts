import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApearAnimationDirective } from './apear-animation.directive';



@NgModule({
  declarations: [ApearAnimationDirective],
  imports: [
    CommonModule
  ],
  exports: [ApearAnimationDirective]
})
export class AnimationDirectivesModule { }
