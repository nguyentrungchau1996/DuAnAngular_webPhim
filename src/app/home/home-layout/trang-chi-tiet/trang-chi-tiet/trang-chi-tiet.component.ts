import { Component, OnInit } from '@angular/core';
import { PhimApiService } from '../../../../services/phim-api.service';
import { itemPhim } from '../../../../_core/models/itemPhim';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  maPhim  = '';
  chiTietPhim: itemPhim[] = [];
  sttThongTin = true;
  constructor(private _activatedRoutes: ActivatedRoute, private _chiTietPhim: PhimApiService) { }

  hienThongTin() {
    this.sttThongTin = true;
  }

  hienLichChieu() {
    this.sttThongTin = false;
  }

  ngOnInit() {
    this._activatedRoutes.params.subscribe(
      (res: any) => {
        console.log(res);
        this.maPhim = res.maphim;
        this._chiTietPhim.getChiTietPhim(this.maPhim).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (res: any) => {
            console.log(res);
            this.chiTietPhim = res;
          }
        );
      }
    );
  }

}
