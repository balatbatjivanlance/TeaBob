import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';

import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-termscondition',
  templateUrl: './termscondition.component.html',
  styleUrls: ['./termscondition.component.css']
})
export class TermsconditionComponent implements OnInit {

  constructor( private ds: DataService , public dialog: MatDialog, public router: Router ) { }

  ngOnInit(): void {
  }
  user_role = localStorage.getItem("user_role");


  showFiller = false;
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 769) {
        return true;
    } else {
        return false;
    }
  }

   
  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.ds.setUserLoggedOut();
    this.router.navigate(['/login']);
}


user_id:any;

userInfo:any = {};
user_uname: any;
user_pword: any;
user_contact: any;
user_address: any;

accept(){
  this.userInfo.user_uname = this.user_uname;
  this.userInfo.user_pword = this.user_pword;
  this.userInfo.user_contact = this.user_contact;
  this.userInfo.user_address = this.user_address;
 this.ds.sendApiRequest("loginUser", this.userInfo).subscribe((res: { payload: any | null; }) => {
    if (res.payload.is_verified == 1) {
      window.localStorage.setItem("Fullname", res.payload.Fullname);
          window.localStorage.setItem("Lastname", res.payload.Lastname);
        window.localStorage.setItem("id", res.payload.user_id);
        window.localStorage.setItem("user_Contact", res.payload.user_Contact);
        window.localStorage.setItem("user_Address", res.payload.user_Address);
        window.localStorage.setItem("user_role", res.payload.user_role);
        
        this.router.navigate(['/home']);
        
        this.ds.setUser(); 
    }
  });

 
}
}
