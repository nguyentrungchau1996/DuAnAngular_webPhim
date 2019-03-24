import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartfilmComponent } from './chartfilm.component';

describe('ChartfilmComponent', () => {
  let component: ChartfilmComponent;
  let fixture: ComponentFixture<ChartfilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartfilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartfilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
