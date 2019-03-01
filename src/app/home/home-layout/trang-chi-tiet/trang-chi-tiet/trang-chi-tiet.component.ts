import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { itemPhim } from 'src/app/_core/models/itemPhim';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.scss']
})
export class TrangChiTietComponent implements OnInit {
  maPhim: string = "";
  chiTietPhim: itemPhim[] = [];
  constructor(private _activatedRoutes: ActivatedRoute, private _chiTietPhim: PhimApiService) { }

  ngOnInit() {
    this._activatedRoutes.params.subscribe(
      (res: any) => {
        console.log(res);
        this.maPhim = res.maphim;
        this._chiTietPhim.getChiTietPhim(this.maPhim).subscribe(
          (res: any) => {
            console.log(res);
            this.chiTietPhim = res;
          }
        )
      }
    )  
  }

}
