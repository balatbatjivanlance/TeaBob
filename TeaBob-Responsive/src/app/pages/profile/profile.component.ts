import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ProfileDialogComponent } from './profile-dialog/profile-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user_id = localStorage.getItem("UID");

  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, route:ActivatedRoute, public dialog: MatDialog ) { 
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
      autoFocus: false, width:"70%", height:"60%"
    });
    dialog.afterClosed().subscribe( ()=>{
      console.log("closed")
    });
  
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}
