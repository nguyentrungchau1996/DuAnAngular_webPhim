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
}
