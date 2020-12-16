import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEntregaComponent } from './orden-entrega.component';

describe('OrdenEntregaComponent', () => {
  let component: OrdenEntregaComponent;
  let fixture: ComponentFixture<OrdenEntregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenEntregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
