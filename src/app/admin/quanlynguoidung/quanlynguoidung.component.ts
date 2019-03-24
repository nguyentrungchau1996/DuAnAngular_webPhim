import { Component, OnInit } from '@angular/core';
import { NguoidungApiService } from '../../services/nguoidung-api.service';

@Component({
  selector: 'app-quanlynguoidung',
  templateUrl: './quanlynguoidung.component.html',
  styleUrls: ['./quanlynguoidung.component.scss']
})
export class QuanlynguoidungComponent implements OnInit {
  danhSachNguoiDung: any[] = [];
  ngayTao = new Date();
  p = 1;
  // tslint:disable-next-line:max-line-length
  constructor(private _nguoiDungSV: NguoidungApiService) { }
  xoaNguoiDung(taiKhoan: string) {
    this._nguoiDungSV.deleteNguoiDung(taiKhoan).subscribe(
      (res: any) => {
        // tslint:disable-next-line:no-shadowed-variable
        const index = this.danhSachNguoiDung.findIndex( (nguoiDung) => nguoiDung.TaiKhoan === taiKhoan);
        this.danhSachNguoiDung.splice(index, 1);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this._nguoiDungSV.getDanhSachNguoiDung().subscribe(
      (res: any) => {
        this.danhSachNguoiDung = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
