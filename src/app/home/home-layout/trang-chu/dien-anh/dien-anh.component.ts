import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.scss']
})
export class DienAnhComponent implements OnInit {
  DanhSachDienAnh = [
    // tslint:disable-next-line:max-line-length
    { TieuDeTinTuc: 'Marvel mua lại DC', HinhAnh: '../../../assets/img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg' },
    // tslint:disable-next-line:max-line-length
    { TieuDeTinTuc: 'Ferdinand', HinhAnh: '../../../assets/img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg' },
    // tslint:disable-next-line:max-line-length
    { TieuDeTinTuc: 'Trùm Hương Cảng', HinhAnh: '../../../assets/img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg' },
  ];
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
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
  constructor() { }

  ngOnInit() {
  }

}
