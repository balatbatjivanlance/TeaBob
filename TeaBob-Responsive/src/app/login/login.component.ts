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
  async loginUser(){
    this.userInfo.user_uname = this.user_uname;
    this.userInfo.user_pword = this.user_pword;

    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: { payload: { Fullname: string; user_id: string; } | null; }) => {

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
        this.router.navigate(['/home']);
        // Swal.fire({
        //   title: 'Login Successfully!',
        //   text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!'
        // })
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Welcome!' + "... "  +  this.userInfo.user_uname + '!'
        })
      }
    });
  }

}
