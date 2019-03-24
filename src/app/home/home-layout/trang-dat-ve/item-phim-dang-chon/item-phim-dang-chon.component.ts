import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemPhim } from '../../../../_core/models/itemPhim';

@Component({
  selector: 'app-item-phim-dang-chon',
  templateUrl: './item-phim-dang-chon.component.html',
  styleUrls: ['./item-phim-dang-chon.component.scss']
})
export class ItemPhimDangChonComponent implements OnInit {
  @Input() phim: itemPhim;

  @Output() eventChonPhim = new EventEmitter();
  trangThai = true;
  constructor() { }

  chonPhim() {
    this.trangThai = !this.trangThai;
    this.eventChonPhim.emit(this.trangThai);
  }
  ngOnInit() {   }

}
