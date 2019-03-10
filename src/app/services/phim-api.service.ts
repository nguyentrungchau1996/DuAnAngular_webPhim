import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhimApiService {

  constructor(private _httpClient: HttpClient) { }
  getDanhSachPhimDangChieu() {
    return this._httpClient.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP08");
  }
  getDanhSachPhimSapChieu() {
    return this._httpClient.get("http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP05");
  }
  getChiTietPhim(MaPhim) {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`);
  }
  getChiTietPhongVe(MaLichChieu) {
    return this._httpClient.get(`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`);
  }
}
