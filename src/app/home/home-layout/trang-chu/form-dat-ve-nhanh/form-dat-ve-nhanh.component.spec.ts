import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatVeNhanhComponent } from './form-dat-ve-nhanh.component';

describe('FormDatVeNhanhComponent', () => {
  let component: FormDatVeNhanhComponent;
  let fixture: ComponentFixture<FormDatVeNhanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDatVeNhanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatVeNhanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
