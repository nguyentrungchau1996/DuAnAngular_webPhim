import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimLichChieuComponent } from './item-phim-lich-chieu.component';

describe('ItemPhimLichChieuComponent', () => {
  let component: ItemPhimLichChieuComponent;
  let fixture: ComponentFixture<ItemPhimLichChieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimLichChieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
