import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-tin-tuc',
  templateUrl: './loai-tin-tuc.component.html',
  styleUrls: ['./loai-tin-tuc.component.scss']
})
export class LoaiTinTucComponent implements OnInit {
  statusTinTuc: string = "review";
  constructor() { }

  ngOnInit() {
  }
  hienStatusTinTuc(value){
    this.statusTinTuc = value;
    
  }
}
