import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ds: DataService, public router: Router) { }

  ngOnInit(): void {
  }
  OTP:any;
  userInfo: any = {};
  user_name: any;
  user_lname: any;

  user_uname: any;
  user_contact: any;
  user_address: any;
  user_pword: any;
  user_Confpword: any;
  user_role = 1;
  regUser(){
    if (this.user_pword.length <= 8 ) {
      if (this.user_pword == this.user_Confpword) {
        this.userInfo.user_name = this.user_name;
      this.userInfo.user_lname = this.user_lname;
      this.userInfo.user_uname = this.user_uname;
      this.userInfo.user_contact = this.user_contact;
      this.userInfo.user_address = this.user_address;
      this.userInfo.user_pword = this.user_pword;
      this.userInfo.user_Confpword = this.user_Confpword;
      this.userInfo.user_role = this.user_role;

      this.OTP = this.makeid(5);
      this.userInfo.user_otp = this.OTP;


      this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe((data: any) => {
        console.log(data);
        if(data.status.remarks == 'failed'){
          Swal.fire('Email Address is already taken.')
        }else{
          Swal.fire('Register Successfully');
          this.mail();
          this.router.navigate(['/terms']);
          
        }
      });

    
    }
  }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Password must be greater than 8. ',
        text: 'Contact no. must be 11 numbers.',
      
      })
    }
   
    

  }

  public mail(){
   
    this.ds.sendApiRequest("mailer", {email: this.user_uname, body: "hello", OTP:this.OTP}).subscribe((res: { payload: null; }) => {
 
    });
  }

  makeid(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

   show_button: Boolean = false;
   show_eye: Boolean = false;
 
 showPassword() {
     this.show_button = !this.show_button;
     this.show_eye = !this.show_eye;
   }

}
