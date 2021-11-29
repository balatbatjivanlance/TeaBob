import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.css']
})
export class StatusDialogComponent implements OnInit {

  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullUsers();
    // this.updateProfile();
  }

  userinfo: any = {};
  user_payload: any [] = []; 

  user_name: any;
  user_uname: any;
  user_contact: any;
  user_address: any;

  pullUsers() {
    this.ds.sendApiRequest("users/", localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user_payload = data.payload;
    
    this.user_name = this.user_payload[0].user_name;
    this.user_uname = this.user_payload[0].user_uname;
    this.user_contact = this.user_payload[0].user_contact;
    this.user_address = this.user_payload[0].user_address;
    }
    )
  }


  userupdate: any [] = [];
  
  updateProfile() {
   let id  = localStorage.getItem("id");

   this.userinfo.user_id =  id;
   this.userinfo.user_name =  this.user_name
   this.userinfo.user_uname =  this.user_uname
   this.userinfo.user_contact = this.user_contact
   this.userinfo.user_address = this.user_address
    this.ds.sendApiRequest("updateProfile/" + id, this.userinfo).subscribe((data: { payload: any; }) => {});
    this.sendMessage();
  }
  
  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
  
}
