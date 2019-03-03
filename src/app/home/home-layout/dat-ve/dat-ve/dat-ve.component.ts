import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { itemPhim } from 'src/app/_core/models/itemPhim';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {
  danhSachPhimDangChieu: itemPhim[] = [];
  chuaChon: boolean = true;
  constructor(private _httpClient: PhimApiService) { }

  chonPhim(trangThai: any){
    this.chuaChon = trangThai;
  }

  ngOnInit() {
    this._httpClient.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        this.danhSachPhimDangChieu = res;
      }
    )
  }
}
