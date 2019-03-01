import { Component, OnInit } from '@angular/core';
import { itemPhim } from '../../../../_core/models/itemPhim';
import { PhimApiService } from '../../../../services/phim-api.service';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit {
  DanhSachPhimSapChieu: itemPhim[] = [];
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
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
  }
  constructor(private _phimApi: PhimApiService) { }

  ngOnInit() {
    this._phimApi.getDanhSachPhimSapChieu().subscribe(
      (res: any) => {
        console.log(res);
        this.DanhSachPhimSapChieu = res;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

}
