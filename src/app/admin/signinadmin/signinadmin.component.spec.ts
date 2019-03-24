import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninadminComponent } from './signinadmin.component';

describe('SigninadminComponent', () => {
  let component: SigninadminComponent;
  let fixture: ComponentFixture<SigninadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
