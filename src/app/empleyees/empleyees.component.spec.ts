import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleyeesComponent } from './empleyees.component';

describe('EmpleyeesComponent', () => {
  let component: EmpleyeesComponent;
  let fixture: ComponentFixture<EmpleyeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleyeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
