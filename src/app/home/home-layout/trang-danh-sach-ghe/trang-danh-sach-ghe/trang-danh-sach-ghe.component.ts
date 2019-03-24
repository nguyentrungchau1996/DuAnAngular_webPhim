import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PhimApiService } from '../../../../services/phim-api.service';
import { ActivatedRoute } from '@angular/router';
import { ghe } from '../../../../_core/models/ghe';
import { ItemGheComponent } from '../item-ghe/item-ghe.component';

@Component({
  selector: 'app-trang-danh-sach-ghe',
  templateUrl: './trang-danh-sach-ghe.component.html',
  styleUrls: ['./trang-danh-sach-ghe.component.scss']
})
export class TrangDanhSachGheComponent implements OnInit {
  maLichChieu = '';
  danhSachGhe: ghe[] = [];

  mangGheDangDat: any = [];

  @ViewChildren(ItemGheComponent) btnGheMuonHuy: QueryList<ItemGheComponent>;
  constructor(private _chiTietPhongVe: PhimApiService, private _activatedRoutes: ActivatedRoute) { }

  tongTien = 0;
  DatGhe(gheDangDat: any) {
    if (gheDangDat.stt) {
      this.mangGheDangDat.push(gheDangDat);
    } else {
      for (let i = 0; i < this.mangGheDangDat.length; i++) {
        const gheDD = this.mangGheDangDat[i];
        if (gheDangDat.ten === gheDD.ten) {
          this.mangGheDangDat.splice(i, 1);
        }
      }
    }
    console.log(this.mangGheDangDat);
    this.tongTien = this.tinhTongTien();
  }

  tinhTongTien() {
    let tongTien = 0;
    for (let i = 0; i < this.mangGheDangDat.length; i++) {
      tongTien += this.mangGheDangDat[i].gia;
    }
    return tongTien;
  }

  HuyGhe(soGheCanHuy: any) {
    // tslint:disable-next-line:no-shadowed-variable
    this.mangGheDangDat.forEach( (ghe: any, stt) => {
      if (ghe.ten === soGheCanHuy) {
        this.mangGheDangDat.splice(stt, 1);
        this.tongTien = this.tinhTongTien();
      }
    });
    this.btnGheMuonHuy.forEach( (btnGhe: any) => {
      console.log(btnGhe);
      if (btnGhe.ghe.TenGhe === soGheCanHuy) {
        btnGhe.dangDat = false;
      }
    });
  }

  ngOnInit() {
    this._activatedRoutes.params.subscribe(
      (res: any) => {
        console.log(res);
        this.maLichChieu = res.malichchieu;
        this._chiTietPhongVe.getChiTietPhongVe(this.maLichChieu).subscribe(
          // tslint:disable-next-line:no-shadowed-variable
          (res: any) => {
            console.log(res);
            this.danhSachGhe = res.DanhSachGhe;
          }
        );
      }
    );
  }
}
