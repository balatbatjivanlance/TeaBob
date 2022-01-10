import { Component, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data.service";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  constructor(private ds: DataService, public router: Router) { }

  ngOnInit(): void {
  }

  
  userInfo: any = {};
  user_name: any;
  user_lname: any;

  user_uname: any;
  user_contact: any;
  user_address: any;
  user_pword: any;
  user_Confpword: any;
  regUser(){
    if (this.user_pword == this.user_Confpword) {
      this.userInfo.user_name = this.user_name;
    this.userInfo.user_lname = this.user_lname;
    this.userInfo.user_uname = this.user_uname;
    this.userInfo.user_contact = this.user_contact;
    this.userInfo.user_address = this.user_address;
    this.userInfo.user_pword = this.user_pword;
    this.userInfo.user_Confpword = this.user_Confpword;


    this.ds.sendApiRequest("regUser", JSON.parse(JSON.stringify(this.userInfo))).subscribe((data: any) => {
    });

    Swal.fire('Register Successfully')
    this.router.navigate(['/login']);
    }
    
    else
    Swal.fire('Password did not match!')

  }

}
