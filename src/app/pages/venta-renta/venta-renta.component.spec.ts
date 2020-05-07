import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaRentaComponent } from './venta-renta.component';

describe('VentaRentaComponent', () => {
  let component: VentaRentaComponent;
  let fixture: ComponentFixture<VentaRentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaRentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
