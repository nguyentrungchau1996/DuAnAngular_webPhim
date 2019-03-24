import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsunguoidungComponent } from './lichsunguoidung.component';

describe('LichsunguoidungComponent', () => {
  let component: LichsunguoidungComponent;
  let fixture: ComponentFixture<LichsunguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichsunguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsunguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
