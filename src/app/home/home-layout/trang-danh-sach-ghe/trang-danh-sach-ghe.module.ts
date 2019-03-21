import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangDanhSachGheComponent } from './trang-danh-sach-ghe/trang-danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';
import { RouterModule } from '@angular/router';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: 
  [
    TrangDanhSachGheComponent, 
    ItemGheComponent
  ],
  imports: [
    CommonModule, RouterModule, TrangChuModule
  ],
  exports: [
    TrangDanhSachGheComponent,
    ItemGheComponent
  ]
})
export class TrangDanhSachGheModule { }
