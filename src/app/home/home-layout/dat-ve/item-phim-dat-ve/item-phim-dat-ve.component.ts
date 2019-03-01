import { Component, OnInit, Input } from '@angular/core';
import { itemPhim } from 'src/app/_core/models/itemPhim';

@Component({
  selector: 'app-item-phim-dat-ve',
  templateUrl: './item-phim-dat-ve.component.html',
  styleUrls: ['./item-phim-dat-ve.component.scss']
})
export class ItemPhimDatVeComponent implements OnInit {
  @Input() phim: itemPhim;
  constructor() { }

  ngOnInit() {
  }

}
