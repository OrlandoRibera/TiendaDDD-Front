import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderServicioComponent } from './order-servicio.component';

describe('OrderServicioComponent', () => {
  let component: OrderServicioComponent;
  let fixture: ComponentFixture<OrderServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
