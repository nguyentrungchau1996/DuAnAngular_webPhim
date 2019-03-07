import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDatVeComponent } from './trang-dat-ve/trang-dat-ve.component';
import { ItemPhimDangChonComponent } from './item-phim-dang-chon/item-phim-dang-chon.component';
import { ItemPhimLichChieuComponent } from './item-phim-lich-chieu/item-phim-lich-chieu.component';
import { RouterModule } from '@angular/router';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [TrangDatVeComponent, ItemPhimDangChonComponent, ItemPhimLichChieuComponent],
  imports: [
    CommonModule, RouterModule, TrangChuModule
  ],
  exports: [
    TrangDatVeComponent,
    ItemPhimDangChonComponent,
    ItemPhimLichChieuComponent
  ]
})
export class TrangDatVeModule { }
