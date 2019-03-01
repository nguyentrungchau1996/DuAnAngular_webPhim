import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeComponent } from './dat-ve/dat-ve.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { ItemPhimDatVeComponent } from './item-phim-dat-ve/item-phim-dat-ve.component';

@NgModule({
  declarations: [DatVeComponent, ItemPhimDatVeComponent],
  imports: [
    CommonModule, TrangChuModule
  ],
  exports: [DatVeComponent, ItemPhimDatVeComponent]
})
export class DatVeModule { }
