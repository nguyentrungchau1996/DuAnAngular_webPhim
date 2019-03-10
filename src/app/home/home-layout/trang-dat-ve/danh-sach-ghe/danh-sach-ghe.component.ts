import { Component, OnInit } from '@angular/core';
import { PhimApiService } from '../../../../services/phim-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {

  constructor(private _danhSachGhe: PhimApiService, private _maPhongVe: ActivatedRoute) { }

  ngOnInit() {
    this._maPhongVe.params.subscribe(
      
    )
  }

}
