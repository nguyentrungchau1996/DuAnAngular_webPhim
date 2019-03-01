import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';
import { TrangChiTietComponent } from './home/home-layout/trang-chi-tiet/trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './home/home-layout/trang-chu/trang-chu/trang-chu.component';

const appRoutes: Routes = [
  { path: '', component: TrangChuComponent},
  { path: 'chitiet/:maphim', component: TrangChiTietComponent}
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
