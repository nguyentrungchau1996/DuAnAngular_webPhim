import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhimApiService {

  constructor(private _httpClient: HttpClient) { }
  getDanhSachPhimDangChieu() {
    return this._httpClient.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03");
  }
  getDanhSachPhimSapChieu() {
    return this._httpClient.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP03");
  }
  getChiTietPhim(MaPhim) {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`);
  }
  getChiTietPhongVe(MaLichChieu) {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`);
  }
  getDanhSachDatVe() {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=nguyenvana', null, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  themPhim(phim: any) {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi', phim, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  deletePhim(maPhim: string) {
    return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  }
}
