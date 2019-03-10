import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDatVeComponent } from './trang-dat-ve/trang-dat-ve.component';
import { ItemPhimDangChonComponent } from './item-phim-dang-chon/item-phim-dang-chon.component';
import { ItemPhimLichChieuComponent } from './item-phim-lich-chieu/item-phim-lich-chieu.component';
import { RouterModule } from '@angular/router';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';

@NgModule({
  declarations: [
    TrangDatVeComponent, 
    ItemPhimDangChonComponent, 
    ItemPhimLichChieuComponent, 
    DanhSachGheComponent
  ],
  imports: [
    CommonModule, RouterModule, TrangChuModule
  ],
  exports: [
    TrangDatVeComponent,
    ItemPhimDangChonComponent,
    ItemPhimLichChieuComponent,
    DanhSachGheComponent
  ]
})
export class TrangDatVeModule { }
