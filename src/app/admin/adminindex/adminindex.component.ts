import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
@Component({
  selector: 'app-adminindex',
  templateUrl: './adminindex.component.html',
  styleUrls: ['./adminindex.component.scss']
})
export class AdminindexComponent implements OnInit {
  public danhSachNguoiDung: any [] = [];
  constructor(private _nguoiDungSV: NguoidungApiService) { }
  ngOnInit() {
    $('.btn-expand-collapse').click(function(e) {
      $('.navbar-primary').toggleClass('collapsed');
    });
    this._nguoiDungSV.getDanhSachNguoiDung().subscribe(
    (res: any) => {
      this.danhSachNguoiDung = res;
    }
    );
  }

}
