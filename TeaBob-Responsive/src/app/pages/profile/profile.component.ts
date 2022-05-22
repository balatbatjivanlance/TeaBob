import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import {MatFormField} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user_id = localStorage.getItem("UID");

  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, route:ActivatedRoute, public dialog: MatDialog, public router: Router ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

  ngOnInit(): void {
    
    this.pullUsers();
  }
  user_role = localStorage.getItem("user_role");


  // SIDENAV AND TOOLBAR CODE 

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
    this.router.navigate(['/']);
}

  // END OF SIDENAV AND TOOLBAR CODE

  //INSERT YOUR NEW TS CODE HERE

  



  
  userinfo: any = {};
  user: any;
  
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users/",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;
    }
    )
  }

      
  statusModal() {
    const dialog = this.dialog.open(ProfileDialogComponent, {
      autoFocus: false, width:"70%", height:"50%"
    });
    dialog.afterClosed().subscribe( ()=>{
    });
  
  }

  ChangePasswordModal() {
    const dialog = this.dialog.open(ChangepasswordComponent, {
      autoFocus: false, width:"70%", height:"50%"
    });
    dialog.afterClosed().subscribe( ()=>{
    });
  
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}
