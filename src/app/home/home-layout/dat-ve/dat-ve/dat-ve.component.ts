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
  chiTietPhim: itemPhim[] = [];
  maPhim: string = "";
  constructor(private _httpClient: PhimApiService) { }

  ngOnInit() {
    this._httpClient.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        console.log(res);
        this.danhSachPhimDangChieu = res;
      }
    )
  }
}
