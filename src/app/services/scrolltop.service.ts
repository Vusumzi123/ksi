import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrolltopService {

  constructor() { }

  scroll() {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, 0);
    }
  }
}
