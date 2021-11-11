import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
  userInfo:any = {};
  user_uname: any;
  user_pword: any;
  async loginUser(){
    this.userInfo.user_uname = this.user_uname;
    this.userInfo.user_pword = this.user_pword;

    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: { payload: { Fullname: string; user_id: string; } | null; }) => {

      if (res.payload == null) {
      alert('Incorrect Credentials')
      }
      else{
        localStorage.setItem("Fullname", res.payload.Fullname);
        localStorage.setItem("id", res.payload.user_id);
        alert('Login Successful');
      }
    });
  }

}
