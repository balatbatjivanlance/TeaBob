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

  user_id:any;

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

    await this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: { payload: any | null; }) => {

        console.log(res.payload);
        this.user_id = res.payload.user_id;

      if (res.payload == null) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Wrong Username or Password!'
        })
      }
      else{
        if(res.payload.is_verified == 0){
          Swal.fire({
            icon: 'info',
       
            title: 'Verify Email',
           
            input: 'text',
          
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: (login) => {
          
            //gawa nalang another request dito pre 
            // para to check if yung inenter na OTP is equal dun sa nakalagay na OTP kay user tas if yes, then set is_verified to 1 
             this.verify(login);
            },
            allowOutsideClick: () => !Swal.isLoading()
          });
        }else{
          window.localStorage.setItem("Fullname", res.payload.Fullname);
        window.localStorage.setItem("id", res.payload.user_id);
        window.localStorage.setItem("user_Contact", res.payload.user_Contact);
        window.localStorage.setItem("user_Address", res.payload.user_Address);
        window.localStorage.setItem("user_role", res.payload.user_role);
        this.checkRole(res.payload.user_role);
        // Swal.fire({
        //   title: 'Login Successfully!',
        //   text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!'
        // })
        Swal.fire({
          title: 'Login Successfully!',
          text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!',
          icon: 'success'
        }
        );
        }
        
   
      }
    });
  }

  verify(otp:any){
    console.log( this.user_id);
    this.ds.sendApiRequest("verifyUser", {user_otp:otp, user_id:this.user_id}).subscribe((res: { payload: any | null; }) => {
      console.log(res.payload);
      if(res.payload){
        window.localStorage.setItem("Fullname", res.payload.Fullname);
        window.localStorage.setItem("id", res.payload.user_id);
        window.localStorage.setItem("user_Contact", res.payload.user_Contact);
        window.localStorage.setItem("user_Address", res.payload.user_Address);
        window.localStorage.setItem("user_role", res.payload.user_role);
        this.checkRole(res.payload.user_role);
        // Swal.fire({
        //   title: 'Login Successfully!',
        //   text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!'
        // })
        Swal.fire({
          title: 'Login Successfully!',
          text: 'Welcome!' + "..."  +  this.userInfo.user_uname + '!',
          icon: 'success'
        }
        );
      }
    });
  }


  public checkRole = (role: number): any => {
    switch (role) {
      case 0:
        return this.router.navigate(['/dashboard']);

      case 1:
        return this.router.navigate(['/home']);

      default:
          return this.router.navigate(['/home']);
    }
  }

}
