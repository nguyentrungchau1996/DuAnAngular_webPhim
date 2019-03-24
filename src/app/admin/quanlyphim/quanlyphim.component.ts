import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimApiService } from '../../services/phim-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quanlyphim',
  templateUrl: './quanlyphim.component.html',
  styleUrls: ['./quanlyphim.component.scss']
})
export class QuanlyphimComponent implements OnInit {
  p = 1;
  @ViewChild('formDK') formThemPhim: NgForm;
  danhSachPhimDangChieu: any[] = [];
  themPhim(phim: any) {
    this._phimApi.themPhim(phim).subscribe(
      (res: any) => {
        this.danhSachPhimDangChieu.push(phim);
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
    this.formThemPhim.resetForm();
  }
  xoaPhim(maPhim: string) {
    this._phimApi.deletePhim(maPhim).subscribe(
      (res: any) => {
        const index = this.danhSachPhimDangChieu.findIndex((phim) => phim.MaPhim === maPhim);
        this.danhSachPhimDangChieu.splice(index, 1);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  constructor(private _phimApi: PhimApiService) { }
  // tslint:disable-next-line:no-shadowed-variable
  ngOnInit() {
    this._phimApi.getDanhSachPhimDangChieu().subscribe(
      (res: any) => {
        this.danhSachPhimDangChieu = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
