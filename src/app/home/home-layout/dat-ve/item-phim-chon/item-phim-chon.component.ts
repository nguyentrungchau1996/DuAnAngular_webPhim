import { Component, OnInit } from '@angular/core';
import { PhimApiService } from '../../../../services/phim-api.service';
import { ActivatedRoute } from '@angular/router';
import { itemPhim } from '../../../../_core/models/itemPhim';

@Component({
  selector: 'app-item-phim-chon',
  templateUrl: './item-phim-chon.component.html',
  styleUrls: ['./item-phim-chon.component.scss']
})
export class ItemPhimChonComponent implements OnInit {
  MaPhim: string = "";
  chiTietPhim: itemPhim[] = [];
  constructor(private _httpClient: PhimApiService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      (res: any) => {
        console.log(res);
        this.MaPhim = res.maphim;
        this._httpClient.getChiTietPhim(this.MaPhim).subscribe(
          (res: any) => {
            console.log(res);
            this.chiTietPhim = res;
          }
        )
      }
    )
  }

}
