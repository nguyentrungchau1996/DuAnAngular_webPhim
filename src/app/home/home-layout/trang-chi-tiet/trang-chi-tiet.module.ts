import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [TrangChiTietComponent],
  imports: [
    CommonModule, TrangChuModule
  ],
  exports: [TrangChiTietComponent]
})
export class TrangChiTietModule { }
