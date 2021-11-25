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
  user: any;
  
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;

    console.log(this.user);

    }
    )
  }
  // userinfoupdate: any = {};
  // userupdate: any;
  
  // updateProfile() {
  //   this.userinfoupdate.user_id = localStorage.getItem("id");
  //   this.ds.sendApiRequest("updateProfile",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
  //   this.userupdate = data.payload;

  //   console.log(this.userupdate);

  //   }
  //   )
  // }

}
