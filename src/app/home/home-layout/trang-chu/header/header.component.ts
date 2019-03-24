import { Component, OnInit } from '@angular/core';
import { itemPhim } from '../../../../_core/models/itemPhim';
import { PhimApiService } from '../../../../services/phim-api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  DanhSachPhimDangChieu: itemPhim[] = [];
  constructor(private _danhSachPhim: PhimApiService) { }

  ngOnInit() {
    this._danhSachPhim.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        this.DanhSachPhimDangChieu = res;
        console.log(this.DanhSachPhimDangChieu);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

}
