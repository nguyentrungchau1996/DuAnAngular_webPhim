import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ghe } from 'src/app/_core/models/ghe';

@Component({
  selector: 'app-item-ghe',
  templateUrl: './item-ghe.component.html',
  styleUrls: ['./item-ghe.component.scss']
})
export class ItemGheComponent implements OnInit {
  @Input() ghe = new ghe();
  @Input() index;

  dangDat: boolean = false;
  @Output() eventDatGhe = new EventEmitter(); 

  constructor() { }

  DatGhe(){
    this.dangDat = !this.dangDat;
    //Tạo đối tượng ghế đang chọn truyền dữ liệu ra danh sách ghế
    let gheDangDat = {ten: this.ghe.TenGhe, gia: this.ghe.GiaVe, stt: this.dangDat};
    this.eventDatGhe.emit(gheDangDat);
  }

  ngOnInit() {
  }

}
