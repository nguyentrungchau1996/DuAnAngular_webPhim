import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { FormDatVeNhanhComponent } from './form-dat-ve-nhanh/form-dat-ve-nhanh.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoaiTinTucComponent } from './loai-tin-tuc/loai-tin-tuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { RouterModule } from '@angular/router';
import { ItemPhimHeaderComponent } from './item-phim-header/item-phim-header.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    TrangChuComponent,
    HeaderComponent,
    SliderComponent,
    FormDatVeNhanhComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    FooterComponent,
    LoaiTinTucComponent,
    DienAnhComponent,
    ItemTinTucComponent,
    ItemPhimHeaderComponent,
  ],
  imports: [
    CommonModule, HttpClientModule, CarouselModule, RouterModule, ModalModule
  ],
  exports: [
    TrangChuComponent,
    HeaderComponent,
    SliderComponent,
    FormDatVeNhanhComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ItemPhimComponent,
    ReviewComponent,
    KhuyenMaiComponent,
    FooterComponent,
    LoaiTinTucComponent,
    DienAnhComponent,
    ItemTinTucComponent,
    ItemPhimHeaderComponent,
  ]
})
export class TrangChuModule { }
