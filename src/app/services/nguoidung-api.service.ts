import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NguoidungApiService {
  getDanhSachNguoiDung() {
    return this._httpClient.get('http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03');
  }
  dangKy(form: any) {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung', form.value, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  dangNhap(nguoiDung) {
    // tslint:disable-next-line:max-line-length
    return this._httpClient.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoiDung.TaiKhoan}&matkhau=${nguoiDung.MatKhau}`, null, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  dangNhapAdmin() {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=darkness&matkhau=123', null, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  deleteNguoiDung(taiKhoan) {
    return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  }
  constructor(private _httpClient: HttpClient) { }
}
