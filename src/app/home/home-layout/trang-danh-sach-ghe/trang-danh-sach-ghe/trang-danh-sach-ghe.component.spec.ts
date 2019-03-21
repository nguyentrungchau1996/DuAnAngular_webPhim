import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangDanhSachGheComponent } from './trang-danh-sach-ghe.component';

describe('TrangDanhSachGheComponent', () => {
  let component: TrangDanhSachGheComponent;
  let fixture: ComponentFixture<TrangDanhSachGheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangDanhSachGheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangDanhSachGheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
