import { Component, OnInit, Input } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';

@Component({
  selector: 'app-item-phim-header',
  templateUrl: './item-phim-header.component.html',
  styleUrls: ['./item-phim-header.component.scss']
})
export class ItemPhimHeaderComponent implements OnInit {
  @Input() phim;
  constructor() { }

  ngOnInit() {
    
  }

}
