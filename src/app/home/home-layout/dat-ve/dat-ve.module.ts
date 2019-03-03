import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { ItemPhimDatVeComponent } from './item-phim-dat-ve/item-phim-dat-ve.component';
import { ItemPhimChonComponent } from './item-phim-chon/item-phim-chon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DatVeComponent, ItemPhimDatVeComponent, ItemPhimChonComponent],
  imports: [
    CommonModule, TrangChuModule, RouterModule
  ],
  exports: [
    DatVeComponent, 
    ItemPhimDatVeComponent,
    ItemPhimChonComponent
  ]
})
export class DatVeModule { }
