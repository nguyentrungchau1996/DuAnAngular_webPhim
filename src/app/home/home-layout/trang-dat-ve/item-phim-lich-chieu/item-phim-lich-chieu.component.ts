import { Component, OnInit } from '@angular/core';
import { itemPhim } from '../../../../_core/models/itemPhim';
import { PhimApiService } from '../../../../services/phim-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-phim-lich-chieu',
  templateUrl: './item-phim-lich-chieu.component.html',
  styleUrls: ['./item-phim-lich-chieu.component.scss']
})
export class ItemPhimLichChieuComponent implements OnInit {
  MaPhim: string = "";
  chiTietPhim: itemPhim[] = [];
  constructor(private _chiTietPhim: PhimApiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (res: any) => {        
        this.MaPhim = res.maphim;        
        this._chiTietPhim.getChiTietPhim(this.MaPhim).subscribe(
          (res: any) => {            
            this.chiTietPhim = res;
          }
        )
      }
    )
  }
}
