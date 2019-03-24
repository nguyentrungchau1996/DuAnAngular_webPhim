import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartuserComponent } from './chartuser.component';

describe('ChartuserComponent', () => {
  let component: ChartuserComponent;
  let fixture: ComponentFixture<ChartuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
