import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { ChartfilmComponent } from './chartfilm/chartfilm.component';
import { ChartuserComponent } from './chartuser/chartuser.component';
import { LichsunguoidungComponent } from './lichsunguoidung/lichsunguoidung.component';
import { QuanlynguoidungComponent } from './quanlynguoidung/quanlynguoidung.component';
import { QuanlyphimComponent } from './quanlyphim/quanlyphim.component';
import { SigninadminComponent } from './signinadmin/signinadmin.component';

@NgModule({
  declarations: [AdminindexComponent, ChartfilmComponent, ChartuserComponent, LichsunguoidungComponent, QuanlynguoidungComponent, QuanlyphimComponent, SigninadminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
