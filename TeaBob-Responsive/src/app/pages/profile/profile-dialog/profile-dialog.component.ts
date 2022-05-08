import { Component, OnInit, Inject  } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.css']
})
export class ProfileDialogComponent implements OnInit {

  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullUsers();
  }

  
  userinfo: any = {};
  user_payload: any [] = []; 

  user_name: any;
  user_lname: any;
  user_uname: any;
  user_contact: any;
  user_address: any;
  user_pword: any;


  pullUsers() {
    this.ds.sendApiRequest("users/", localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user_payload = data.payload;
    
    this.user_name = this.user_payload[0].user_name;
    this.user_lname = this.user_payload[0].user_lname;
    this.user_uname = this.user_payload[0].user_uname;
    this.user_contact = this.user_payload[0].user_contact;
    this.user_address = this.user_payload[0].user_address;
    this.user_pword = this.user_payload[0].user_pword;
    
  console.log(this.user_pword)
    }
    )
  }

updateProfile() {
 
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      let id  = localStorage.getItem("id");

 this.userinfo.user_id =  id;
 this.userinfo.user_name =  this.user_name
 this.userinfo.user_lname =  this.user_lname
 this.userinfo.user_uname =  this.user_uname
 this.userinfo.user_contact = this.user_contact
 this.userinfo.user_address = this.user_address

  this.ds.sendApiRequest("updateProfile/" + id, this.userinfo).subscribe((data: { payload: any; }) => {});
  this.sendMessage();
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
  this.dialog.closeAll();
}  

  
  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}

