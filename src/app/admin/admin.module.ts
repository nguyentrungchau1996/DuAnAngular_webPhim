import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { ChartfilmComponent } from './chartfilm/chartfilm.component';
import { ChartuserComponent } from './chartuser/chartuser.component';
import { LichsunguoidungComponent } from './lichsunguoidung/lichsunguoidung.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { SigninadminComponent } from './signinadmin/signinadmin.component';
import { FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AdminindexComponent, ChartfilmComponent, ChartuserComponent, LichsunguoidungComponent, QuanlynguoidungComponent, QuanlyphimComponent, SigninadminComponent],
  imports: [
    CommonModule, FormsModule, NgxPaginationModule, HttpClientModule, ChartsModule, RouterModule
  // tslint:disable-next-line:max-line-length
  ], exports: [ SigninadminComponent, AdminindexComponent, ChartfilmComponent, ChartuserComponent, QuanlyphimComponent, QuanlynguoidungComponent, LichsunguoidungComponent ]
})
export class AdminModule { }
