import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTrabajoComponent } from './formulario-trabajo.component';

describe('FormularioTrabajoComponent', () => {
  let component: FormularioTrabajoComponent;
  let fixture: ComponentFixture<FormularioTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
