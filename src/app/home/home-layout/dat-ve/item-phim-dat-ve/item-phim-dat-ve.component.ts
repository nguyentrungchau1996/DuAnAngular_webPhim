import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemPhim } from 'src/app/_core/models/itemPhim';

@Component({
  selector: 'app-item-phim-dat-ve',
  templateUrl: './item-phim-dat-ve.component.html',
  styleUrls: ['./item-phim-dat-ve.component.scss']
})
export class ItemPhimDatVeComponent implements OnInit {
  public trangThai: boolean = true;
  @Input() phim: itemPhim;

  @Output() eventChonPhim = new EventEmitter();
  constructor() { }

  chonPhim(){
    this.trangThai = !this.trangThai;
    this.eventChonPhim.emit(this.trangThai);
  }

  ngOnInit() {
  }

}
