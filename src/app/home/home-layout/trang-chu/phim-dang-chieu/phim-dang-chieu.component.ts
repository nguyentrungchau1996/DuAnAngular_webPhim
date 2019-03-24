import { Component, OnInit } from '@angular/core';
import { PhimApiService } from '../../../../services/phim-api.service';
import { itemPhim } from '../../../../_core/models/itemPhim';
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit {
  DanhSachPhimDangChieu: itemPhim[] = [];
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor(private _phimApi: PhimApiService) { }

  ngOnInit() {
    this._phimApi.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        console.log(res);
        this.DanhSachPhimDangChieu = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
