import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPhimHeaderComponent } from './item-phim-header.component';

describe('ItemPhimHeaderComponent', () => {
  let component: ItemPhimHeaderComponent;
  let fixture: ComponentFixture<ItemPhimHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPhimHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPhimHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
