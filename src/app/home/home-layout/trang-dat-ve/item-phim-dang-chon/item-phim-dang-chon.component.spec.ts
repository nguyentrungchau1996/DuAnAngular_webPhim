import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimDangChonComponent } from './item-phim-dang-chon.component';

describe('ItemPhimDangChonComponent', () => {
  let component: ItemPhimDangChonComponent;
  let fixture: ComponentFixture<ItemPhimDangChonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimDangChonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimDangChonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
