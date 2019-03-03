import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimChonComponent } from './item-phim-chon.component';

describe('ItemPhimChonComponent', () => {
  let component: ItemPhimChonComponent;
  let fixture: ComponentFixture<ItemPhimChonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimChonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimChonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
