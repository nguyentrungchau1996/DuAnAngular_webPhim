import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { TrangChiTietComponent } from './home/home-layout/trang-chi-tiet/trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './home/home-layout/trang-chu/trang-chu/trang-chu.component';
import { TrangDatVeComponent } from './home/home-layout/trang-dat-ve/trang-dat-ve/trang-dat-ve.component';
import { ItemPhimLichChieuComponent } from './home/home-layout/trang-dat-ve/item-phim-lich-chieu/item-phim-lich-chieu.component';
import { TrangDanhSachGheComponent } from './home/home-layout/trang-danh-sach-ghe/trang-danh-sach-ghe/trang-danh-sach-ghe.component';

const appRoutes: Routes = [
  { path: '', component: TrangChuComponent},
  { path: 'chitiet/:maphim', component: TrangChiTietComponent},
  { path: 'datve', component: TrangDatVeComponent, children: [
    {path: 'chonphim/:maphim', component: ItemPhimLichChieuComponent}
  ]},
  {path: 'danhsachghe/:malichchieu', component: TrangDanhSachGheComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
