import { Component, OnInit } from '@angular/core';
import { NguoidungApiService } from '../../services/nguoidung-api.service';
import { Router } from '@angular/router';
import { AuthService } from '../../guard/auth.service';
@Component({
  selector: 'app-signinadmin',
  templateUrl: './signinadmin.component.html',
  styleUrls: ['./signinadmin.component.scss']
})
export class SigninadminComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private _router: Router, private _nguoiDungSV: NguoidungApiService, private _auth: AuthService) { }
  dangNhapAdmin(nguoiDung: { TaiKhoan: string; MatKhau: string; }) {
    this._nguoiDungSV.dangNhapAdmin().subscribe(
      (res: any) => {
        if (nguoiDung.TaiKhoan === 'darkness' && nguoiDung.MatKhau === '123') {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this._router.navigate(['/adminhome']);
        } else {
          alert('Tài khoản hoặc mật khẩu không đúng');
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }
}
