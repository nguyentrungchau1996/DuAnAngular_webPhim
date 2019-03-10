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
import { DanhSachGheComponent } from './home/home-layout/trang-dat-ve/danh-sach-ghe/danh-sach-ghe.component';

const appRoutes: Routes = [
  { path: 'home', component: TrangChuComponent},
  { path: 'chitiet/:maphim', component: TrangChiTietComponent},
  { path: 'datve', component: TrangDatVeComponent, children: [
    {path: 'chonphim/:maphim', component: ItemPhimLichChieuComponent, children: [
      {path: 'danhsachghe/:maphongve', component: DanhSachGheComponent}
    ]}
  ]}
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
