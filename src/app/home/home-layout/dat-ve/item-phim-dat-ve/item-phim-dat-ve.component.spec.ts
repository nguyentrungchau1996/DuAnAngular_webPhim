import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimDatVeComponent } from './item-phim-dat-ve.component';

describe('ItemPhimDatVeComponent', () => {
  let component: ItemPhimDatVeComponent;
  let fixture: ComponentFixture<ItemPhimDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
