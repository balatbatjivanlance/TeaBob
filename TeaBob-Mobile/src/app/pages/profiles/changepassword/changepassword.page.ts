import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  passwordUpdate = false;
  wrongOldPassword = false;
  minCharacters = false;

  passwordInfo: any = {};

  driver_id = localStorage.getItem("Driver_id");

  old_password: any
  driver_password: any;
  driver_Cnewpassword: any;

  constructor(public us: UserService, public ds: DataService, private _router: Router) { }

  ngOnInit() {
  }

  
  ChangePassDriver(){
    if(this.old_password != null){
      this.passwordUpdate = true;
      if(this.driver_password != null && this.driver_password.length < 8 && this.passwordUpdate == true){
        this.minCharacters = true;
      }
      else if(this.driver_password != this.driver_Cnewpassword){
        alert('New Password Did not Match');
      }
      else if(this.driver_password != null && this.passwordUpdate == true){
        this.passwordInfo.old_password = this.old_password;
        this.passwordInfo.driver_password = this.driver_password;
        this.passwordInfo.driver_id = this.driver_id;
      
        this.ds.sendApiRequest("ChangePassDriver", this.passwordInfo).subscribe((data:any) =>{
          if(data.payload == null){
              this.wrongOldPassword = true;
             alert('Wrong Old Password');

          }
          else{
            this.wrongOldPassword = false;
            alert('Password Changed');
          }

        });
      }
    }
    else{

    }
    
  // window.location.reload();
  }

}
