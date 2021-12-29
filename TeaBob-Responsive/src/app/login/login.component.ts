import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ds: DataService, public router: Router) { }

  ngOnInit(): void {
  }
  userInfo:any = {};
  user_uname: any;
  user_pword: any;
  user_contact: any;
  user_address: any;
  async loginUser(){
    this.userInfo.user_uname = this.user_uname;
    this.userInfo.user_pword = this.user_pword;
    this.userInfo.user_contact = this.user_contact;
    this.userInfo.user_address = this.user_address;

    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: { payload: { Fullname: string;
       user_id: string; user_Contact: string; user_Address: string; user_role: string;} | null; }) => {

      if (res.payload == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Username or Password!'
        })
      }
      else{
        window.localStorage.setItem("Fullname", res.payload.Fullname);
        window.localStorage.setItem("id", res.payload.user_id);
        window.localStorage.setItem("user_Contact", res.payload.user_Contact);
        window.localStorage.setItem("user_Address", res.payload.user_Address);
        window.localStorage.setItem("user_role", res.payload.user_role);
        this.router.navigate(['/home']);
        // Swal.fire({
        //   title: 'Login Successfully!',
        //   text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!'
        // })
        Swal.fire({
          title: 'Login Successfully!',
          text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!',
          icon: 'success'
        }
        )
      }
    });
  }

}
