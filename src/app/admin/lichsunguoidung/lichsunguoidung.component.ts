import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';

@Component({
  selector: 'app-lichsunguoidung',
  templateUrl: './lichsunguoidung.component.html',
  styleUrls: ['./lichsunguoidung.component.scss']
})
export class LichsunguoidungComponent implements OnInit {
  p = 1;
  danhSachVeDaDat: any [] = [] ;
  constructor(private _phimAPI: PhimApiService) { }

  ngOnInit() {
    this._phimAPI.getDanhSachDatVe().subscribe(
      (res: any) => {
         this.danhSachVeDaDat = res.DanhSachVeDaDat;
        // console.log(res);
      }
    );
  }

}
