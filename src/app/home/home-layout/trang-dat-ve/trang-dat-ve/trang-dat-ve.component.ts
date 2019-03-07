import { Component, OnInit } from '@angular/core';
import { itemPhim } from '../../../../_core/models/itemPhim';
import { PhimApiService } from '../../../../services/phim-api.service';

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.scss']
})
export class TrangDatVeComponent implements OnInit {
  danhSachPhimDangChieu: itemPhim[] = [];
  chuaChon: boolean = true;
  constructor(private _dsPhimDangChieu: PhimApiService) { }

  chonPhim(trangThai: any) {
    this.chuaChon = trangThai;
  }

  ngOnInit() {
    this._dsPhimDangChieu.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        this.danhSachPhimDangChieu = res;
      }
    )
  }

}
