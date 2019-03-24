import { Component, OnInit } from '@angular/core';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  sttDangNhap: boolean = true;
  constructor(private _getSignIn: NguoidungApiService, private _postSignUp: NguoidungApiService) { }

  onBtnDangNhap(){
    this.sttDangNhap = true;
  }

  onBtnDangKy(){
    this.sttDangNhap = false;
  }

  signIn(nguoiDung) {
    this._getSignIn.dangNhap(nguoiDung).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  signUp(form: any){
    form.value.MaNhom = "GP01";
    this._postSignUp.dangKy(form).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
  }

}
