import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchHTTPwithObservableComponent } from './fetch-httpwith-observable.component';

describe('FetchHTTPwithObservableComponent', () => {
  let component: FetchHTTPwithObservableComponent;
  let fixture: ComponentFixture<FetchHTTPwithObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchHTTPwithObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchHTTPwithObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
